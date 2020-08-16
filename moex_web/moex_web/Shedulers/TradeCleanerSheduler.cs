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

namespace moex_web.Shedulers
{
    public class TradeCleanerSheduler : IHostedService, IDisposable
    {
        private int executionCount = 0;
        private readonly ILogger<TradeCleanerSheduler> _logger;
        private Timer _timer;
        //ISecurityTable _securityTable;
        //ITradeTable _tradeTable;
        //IDataBase _dataBase;
        private readonly IServiceScopeFactory _scopeFactory;

        public TradeCleanerSheduler(ILogger<TradeCleanerSheduler> logger, IServiceScopeFactory scopeFactory)
        {
            _logger = logger;
            //_securityTable = securityTable;
            //_tradeTable = tradeTable;
            //_dataBase = dataBase;
            _scopeFactory = scopeFactory;
        }

        public Task StartAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("Timed Hosted Service running.");

            _timer = new Timer(DoWork, null, TimeSpan.Zero, TimeSpan.FromMinutes(1));

            return Task.CompletedTask;
        }

        private void DoWork(object state)
        {
            using (var scope = _scopeFactory.CreateScope())
            {
                var _tradeRepository = scope.ServiceProvider.GetRequiredService<ITradeRepository>();
                var _tradeTable = scope.ServiceProvider.GetRequiredService<ITradeTable>();

                var count = Interlocked.Increment(ref executionCount);

                _logger.LogInformation("Timed Hosted Service is working. Count: {Count}", count);

                string postfix_date_init = _tradeTable.ConvertDate(DateTime.Now.AddYears(-5));
                _tradeRepository.DeleteOldTrades(postfix_date_init);
            }
        }

        public Task StopAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("Timed Hosted Service is stopping.");

            _timer?.Change(Timeout.Infinite, 0);

            return Task.CompletedTask;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }
    }
}
