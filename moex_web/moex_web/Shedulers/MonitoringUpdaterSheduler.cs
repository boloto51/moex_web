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
    public class MonitoringUpdaterSheduler : IHostedService, IDisposable
    {
        private int executionCount = 0;
        private readonly ILogger<MonitoringUpdaterSheduler> _logger;
        private Timer _timer;
        private readonly IServiceScopeFactory _scopeFactory;
        private IConfigSettings _configSettings;

        public MonitoringUpdaterSheduler(ILogger<MonitoringUpdaterSheduler> logger, IServiceScopeFactory scopeFactory,
            IConfigSettings configSettings)
        {
            _logger = logger;
            _scopeFactory = scopeFactory;
            _configSettings = configSettings;
        }

        public Task StartAsync(CancellationToken stoppingToken)
        {
            var startTime = _configSettings.ApplicationKeys.MonitoringUpdaterShedulerStartTime;
            //var dueTime = IntervalToStartTimer(startTime);
            var dueTime = TimeSpan.Parse((DateTime.Now.AddMinutes(1) - DateTime.Now).ToString());
            _logger.LogInformation("MonitoringUpdaterSheduler running.\t" + DateTime.Now);
            _timer = new Timer(DoWork, null, dueTime, TimeSpan.FromHours(24));
            return Task.CompletedTask;
        }

        public TimeSpan IntervalToStartTimer(TimeSpan startTime)
        {
            var nowTime = DateTime.Now.TimeOfDay;
            return TimeSpan.Compare(startTime, nowTime) >= 0 ?
                startTime - nowTime : startTime - nowTime + new TimeSpan(24, 0, 0);
        }

        private void DoWork(object state)
        {
            using (var scope = _scopeFactory.CreateScope())
            {
                var count = Interlocked.Increment(ref executionCount);
                _logger.LogInformation("MonitoringUpdaterSheduler is working.\t" + DateTime.Now + "\tCount: {Count}", count);

                //string url_init = "http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/tqbr/securities";
                //var _tradeRepository = scope.ServiceProvider.GetRequiredService<ITradeRepository>();
                //var _tradeTable = scope.ServiceProvider.GetRequiredService<ITradeTable>();
                //var _dateConverter = scope.ServiceProvider.GetRequiredService<IDateConverter>();

                //string postfix_date_init = _dateConverter.ConvertDate(DateTime.Now.AddYears(-5));

                //if (_tradeRepository.Get().Result.Count == 0)
                //{
                //    _tradeTable.Fill(url_init, postfix_date_init);
                //}
                //else
                //{
                //    _tradeTable.UpdateTable(url_init);
                //}
            }
        }

        public Task StopAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("MonitoringUpdaterSheduler is stopping.\t" + DateTime.Now);

            _timer?.Change(Timeout.Infinite, 0);

            return Task.CompletedTask;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }

    }
}
