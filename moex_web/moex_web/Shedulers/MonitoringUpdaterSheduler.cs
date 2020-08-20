﻿using Microsoft.Extensions.Hosting;
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

                var monitoringTable = scope.ServiceProvider.GetRequiredService<IMonitoringTable>();
                monitoringTable.UpdateTable(_configSettings.ApplicationKeys.MonitoringUpdaterShedulerDaysAgo);
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