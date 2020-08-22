using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using moex_web.Core.Config;

namespace moex_web.Shedulers
{
    public class MonitoringCleanerSheduler : IMonitoringCleanerSheduler
    {
        private int executionCount = 0;
        private readonly ILogger<MonitoringUpdaterSheduler> _logger;
        private Timer _timer;
        private readonly IServiceScopeFactory _scopeFactory;
        private IConfigSettings _configSettings;

        public MonitoringCleanerSheduler(ILogger<MonitoringUpdaterSheduler> logger, IServiceScopeFactory scopeFactory,
            IConfigSettings configSettings)
        {
            _logger = logger;
            _scopeFactory = scopeFactory;
            _configSettings = configSettings;
        }

        public Task StartAsync(CancellationToken stoppingToken)
        {
            var startTime = _configSettings.ApplicationKeys.MonitoringCleanerShedulerStartTime;
            //var dueTime = IntervalToStartTimer(startTime);
            var dueTime = TimeSpan.Parse((DateTime.Now.AddMinutes(1) - DateTime.Now).ToString());
            _logger.LogInformation("MonitoringCleanerSheduler running.\t" + DateTime.Now);
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
                _logger.LogInformation("MonitoringCleanerSheduler is working.\t" + DateTime.Now + "\tCount: {Count}", count);

                var monitoringTable = scope.ServiceProvider.GetRequiredService<IMonitoringTable>();
                monitoringTable.DeleteOldRecords();
            }
        }

        public Task StopAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("MonitoringCleanerSheduler is stopping.\t" + DateTime.Now);

            _timer?.Change(Timeout.Infinite, 0);

            return Task.CompletedTask;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }
    }
}
