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
    public class TradeCleanerSheduler : IHostedService, IDisposable
    {
        private int executionCount = 0;
        private readonly ILogger<TradeCleanerSheduler> _logger;
        private Timer _timer;
        private readonly IServiceScopeFactory _scopeFactory;
        private IConfigSettings _configSettings;

        public TradeCleanerSheduler(ILogger<TradeCleanerSheduler> logger, IServiceScopeFactory scopeFactory,
            IConfigSettings configSettings)
        {
            _logger = logger;
            _scopeFactory = scopeFactory;
            _configSettings = configSettings;
        }

        public Task StartAsync(CancellationToken stoppingToken)
        {
            var TargetHours = _configSettings.ApplicationKeys.TradeCleanerShedulerTargetHours;
            var TargetMinutes = _configSettings.ApplicationKeys.TradeCleanerShedulerTargetMinutes;
            var HoursPeriod = _configSettings.ApplicationKeys.TradeCleanerShedulerHoursPeriod;

            TimeSpan dueTime = TargetHours == -1 ? TimeSpan.Zero : IntervalToStartTimer(TargetHours, TargetMinutes);

            _logger.LogInformation("TradeCleanerSheduler running.");

            //_timer = new Timer(DoWork, null, TimeSpan.Zero, TimeSpan.FromHours(24));
            //_timer = new Timer(DoWork, null, IntervalToStartTimer(), TimeSpan.FromHours(24));
            _timer = new Timer(DoWork, null, dueTime, TimeSpan.FromHours(HoursPeriod));

            return Task.CompletedTask;
        }

        public TimeSpan IntervalToStartTimer(int hours, int minutes)
        {
            var targetTime = new DateTime(1, 1, 1, hours, minutes, 0).TimeOfDay;

            var nowTime = DateTime.Now.TimeOfDay;

            return TimeSpan.Compare(targetTime, nowTime) >= 0 ?
                targetTime - nowTime : targetTime - nowTime + new TimeSpan(24, 0, 0);
        }

        private void DoWork(object state)
        {
            using (var scope = _scopeFactory.CreateScope())
            {
                var _tradeRepository = scope.ServiceProvider.GetRequiredService<ITradeRepository>();
                //var _tradeTable = scope.ServiceProvider.GetRequiredService<ITradeTable>();
                var _dateConverter = scope.ServiceProvider.GetRequiredService<IDateConverter>();

                var count = Interlocked.Increment(ref executionCount);

                _logger.LogInformation("TradeCleanerSheduler is working. Count: {Count}", count);

                string postfix_date_init = _dateConverter.ConvertDate(DateTime.Now.AddYears(-5));
                _tradeRepository.DeleteOldTrades(postfix_date_init);
            }
        }

        public Task StopAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("TradeCleanerSheduler is stopping.");

            _timer?.Change(Timeout.Infinite, 0);

            return Task.CompletedTask;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }
    }
}
