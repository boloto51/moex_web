using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using moex_web.Data.Repositories;
using moex_web.Converters;
using moex_web.Core.Config;
using moex_web.Managers;

namespace moex_web.Shedulers
{
    public class TradeUpdaterSheduler : ITradeUpdaterSheduler// : IHostedService, IDisposable
    {
        private int executionCount = 0;
        private readonly ILogger<TradeUpdaterSheduler> _logger;
        private Timer _timer;
        private readonly IServiceScopeFactory _scopeFactory;
        private IConfigSettings _configSettings;

        public TradeUpdaterSheduler(ILogger<TradeUpdaterSheduler> logger, IServiceScopeFactory scopeFactory,
            IConfigSettings configSettings)
        {
            _logger = logger;
            _scopeFactory = scopeFactory;
            _configSettings = configSettings;
        }

        public Task StartAsync(CancellationToken stoppingToken)
        {
            var startTime = _configSettings.ApplicationKeys.TradeUpdaterShedulerStartTime;
            //var dueTime = IntervalToStartTimer(startTime);
            TimeSpan dueTime = DateTime.Now.AddMinutes(1) - DateTime.Now;
            _logger.LogInformation("TradeUpdateSheduler running.\t" + DateTime.Now);
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
                _logger.LogInformation("TradeCleanerSheduler is working.\t" + DateTime.Now + "\tCount: {Count}", count);

                string url_init = _configSettings.ApplicationKeys.UrlInit;
                int numberYearsAgo = -1 * _configSettings.ApplicationKeys.NumberYearsAgo;
                var _tradeRepository = scope.ServiceProvider.GetRequiredService<ITradeRepository>();
                var _tradeTable = scope.ServiceProvider.GetRequiredService<ITradeManager>();
                var _dateConverter = scope.ServiceProvider.GetRequiredService<IDateConverter>();

                //string postfix_date_init = _dateConverter.ConvertDate(DateTime.Now.AddYears(numberYearsAgo));
                string postfix_date_init = DateTime.Now.AddYears(numberYearsAgo).ToString("yyyy-MM-dd");

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
            _logger.LogInformation("TradeUpdateSheduler is stopping.\t" + DateTime.Now);

            _timer?.Change(Timeout.Infinite, 0);

            return Task.CompletedTask;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }
    }
}
