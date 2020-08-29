using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using moex_web.Data.Repositories;
using moex_web.Converters;
using moex_web.Core.Config;

namespace moex_web.Shedulers
{
    public class TradeCleanerSheduler : ITradeCleanerSheduler// : IHostedService, IDisposable
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
            var startTime = _configSettings.ApplicationKeys.TradeCleanerShedulerStartTime;
            //var dueTime = IntervalToStartTimer(startTime);
            TimeSpan dueTime = DateTime.Now.AddSeconds(1) - DateTime.Now;
            _logger.LogInformation("TradeCleanerSheduler running.\t" + DateTime.Now);
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
                var _tradeRepository = scope.ServiceProvider.GetRequiredService<ITradeRepository>();
                //var _tradeTable = scope.ServiceProvider.GetRequiredService<ITradeTable>();
                var _dateConverter = scope.ServiceProvider.GetRequiredService<IDateConverter>();

                var count = Interlocked.Increment(ref executionCount);

                _logger.LogInformation("TradeCleanerSheduler is working.\t" + DateTime.Now + "\tCount: {Count}", count);

                //string postfix_date_init = _dateConverter.ConvertDate(DateTime.Now.AddYears(-5));
                //string postfix_date_init = DateTime.Now.AddYears(-5).ToString("yyyy-MM-dd");
                var postfix_date_init = DateTime.Now.AddYears(-5);
                _tradeRepository.DeleteOldTrades(postfix_date_init);
            }
        }

        public Task StopAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("TradeCleanerSheduler is stopping.\t" + DateTime.Now);

            _timer?.Change(Timeout.Infinite, 0);

            return Task.CompletedTask;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }
    }
}
