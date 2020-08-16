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

namespace moex_web.Shedulers
{
    public class TradeUpdateSheduler : IHostedService, IDisposable
    {
        private int executionCount = 0;
        private readonly ILogger<TradeCleanerSheduler> _logger;
        private Timer _timer;
        private readonly IServiceScopeFactory _scopeFactory;

        public TradeUpdateSheduler(ILogger<TradeCleanerSheduler> logger, IServiceScopeFactory scopeFactory)
        {
            _logger = logger;
            _scopeFactory = scopeFactory;
        }

        public Task StartAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("TradeUpdateSheduler running.");

            _timer = new Timer(DoWork, null, IntervalToStartTimer(), TimeSpan.FromHours(24));

            return Task.CompletedTask;
        }

        public TimeSpan IntervalToStartTimer()
        {
            var targetTime = new DateTime(1, 1, 1, 21, 20, 0).TimeOfDay;

            var nowTime = DateTime.Now.TimeOfDay;

            return TimeSpan.Compare(targetTime, nowTime) >= 0 ?
                targetTime - nowTime : targetTime - nowTime + new TimeSpan(24, 0, 0);
        }

        private void DoWork(object state)
        {
            using (var scope = _scopeFactory.CreateScope())
            {
                string url_init = "http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/tqbr/securities";
                //var _tradeRepository = scope.ServiceProvider.GetRequiredService<ITradeRepository>();
                var _tradeTable = scope.ServiceProvider.GetRequiredService<ITradeTable>();
                var _dataBase = scope.ServiceProvider.GetRequiredService<IDataBase>();
                string postfix_date_init = _tradeTable.ConvertDate(DateTime.Now.AddYears(-5));

                if (_dataBase.FromTradeTableCount() == 0)
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
