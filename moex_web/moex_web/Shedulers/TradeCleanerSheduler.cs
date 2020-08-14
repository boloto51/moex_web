using Microsoft.Extensions.Hosting;
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using moex_web.Services;
using moex_web.Shedulers;
using moex_web.Data.DbContext;
using Microsoft.EntityFrameworkCore;

namespace moex_web.Shedulers
{
    public class TradeCleanerSheduler : IHostedService, IDisposable
    {
        private int executionCount = 0;
        private readonly ILogger<TradeCleanerSheduler> _logger;
        private Timer _timer;
        ISecurityTable _securityTable;
        ITradeTable _tradeTable;
        IDataBase _dataBase;

        public TradeCleanerSheduler(ILogger<TradeCleanerSheduler> logger, ISecurityTable securityTable,
            ITradeTable tradeTable, IDataBase dataBase)
        {
            _logger = logger;
            _securityTable = securityTable;
            _tradeTable = tradeTable;
            _dataBase = dataBase;
        }

        public Task StartAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("Timed Hosted Service running.");

            _timer = new Timer(CleanTradeTable, null, TimeSpan.Zero, TimeSpan.FromMinutes(5));

            return Task.CompletedTask;
        }

        private void CleanTradeTable(object state)
        {
            var count = Interlocked.Increment(ref executionCount);

            _logger.LogInformation("Timed Hosted Service is working. Count: {Count}", count);

            string postfix_date_init = _tradeTable.ConvertDate(DateTime.Now.AddYears(-5));
            _dataBase.DeleteOldTrades(postfix_date_init);
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
