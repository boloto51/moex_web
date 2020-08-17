using Microsoft.Extensions.Hosting;
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using moex_web.Services;
using moex_web.Shedulers;
using moex_web.Data.DbContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using moex_web.Data.Repositories;
using moex_web.Converters;
using moex_web.Core.Config;

namespace moex_web.Shedulers
{
    public class TradeUpdateSheduler : IHostedService, IDisposable
    {
        private int executionCount = 0;
        private readonly ILogger<TradeCleanerSheduler> _logger;
        private Timer _timer;
        private readonly IServiceScopeFactory _scopeFactory;
        private IConfigSettings _configSettings;

        public TradeUpdateSheduler(ILogger<TradeCleanerSheduler> logger, IServiceScopeFactory scopeFactory,
            IConfigSettings configSettings)
        {
            _logger = logger;
            _scopeFactory = scopeFactory;
            _configSettings = configSettings;
        }

        public Task StartAsync(CancellationToken stoppingToken)
        {
            var TargetHours = _configSettings.ApplicationKeys.TradeUpdateShedulerTargetHours;
            var TargetMinutes = _configSettings.ApplicationKeys.TradeUpdateShedulerTargetMinutes;
            var HoursPeriod = _configSettings.ApplicationKeys.TradeUpdateShedulerHoursPeriod;

            TimeSpan dueTime = TargetHours == -1 ? TimeSpan.Zero : IntervalToStartTimer(TargetHours, TargetMinutes);

            _logger.LogInformation("TradeUpdateSheduler running.");

            //_timer = new Timer(DoWork, null, TimeSpan.Zero, TimeSpan.FromHours(24));
            //_timer = new Timer(DoWork, null, IntervalToStartTimer(), TimeSpan.FromHours(24));
            _timer = new Timer(DoWork, null, dueTime, TimeSpan.FromHours(HoursPeriod));

            return Task.CompletedTask;
        }

        public TimeSpan IntervalToStartTimer(int hours, int minutes)
        {
            //var targetTime = new DateTime(1, 1, 1, 22, 12, 0).TimeOfDay;
            var targetTime = new DateTime(1, 1, 1, hours, minutes, 0).TimeOfDay;

            var nowTime = DateTime.Now.TimeOfDay;

            return TimeSpan.Compare(targetTime, nowTime) >= 0 ?
                targetTime - nowTime : targetTime - nowTime + new TimeSpan(24, 0, 0);
        }

        private void DoWork(object state)
        {
            using (var scope = _scopeFactory.CreateScope())
            {
                string url_init = "http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/tqbr/securities";
                var _tradeRepository = scope.ServiceProvider.GetRequiredService<ITradeRepository>();
                var _tradeTable = scope.ServiceProvider.GetRequiredService<ITradeTable>();
                //var _dataBase = scope.ServiceProvider.GetRequiredService<IDataBase>();
                var _dateConverter = scope.ServiceProvider.GetRequiredService<IDateConverter>();

                string postfix_date_init = _dateConverter.ConvertDate(DateTime.Now.AddYears(-5));

                //if (_dataBase.FromTradeTableCount() == 0)
                if (_tradeRepository.Get().Result.Count == 0)
                {
                    _tradeTable.Fill(url_init, postfix_date_init);
                }
                else
                {
                    _tradeTable.UpdateTable(url_init);
                }
            }
        }

        public Task StopAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("TradeUpdateSheduler is stopping.");

            _timer?.Change(Timeout.Infinite, 0);

            return Task.CompletedTask;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }
    }
}
