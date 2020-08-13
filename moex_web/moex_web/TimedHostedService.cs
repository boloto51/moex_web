using Microsoft.Extensions.Hosting;
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using moex_web.Services;
using moex_web.Services.Worker;
using moex_web.Data.DbContext;
using Microsoft.EntityFrameworkCore;

namespace moex_web
{
    public class TimedHostedService : IHostedService, IDisposable
    {
        private int executionCount = 0;
        private readonly ILogger<TimedHostedService> _logger;
        private Timer _timer;

        public TimedHostedService(ILogger<TimedHostedService> logger)
        {
            _logger = logger;
        }

        public Task StartAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("Timed Hosted Service running.");

            _timer = new Timer(DoWork, null, TimeSpan.Zero, TimeSpan.FromSeconds(5));

            return Task.CompletedTask;
        }

        private void DoWork(object state)
        {
            var count = Interlocked.Increment(ref executionCount);

            _logger.LogInformation("Timed Hosted Service is working. Count: {Count}", count);

            string url_init = "http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/tqbr/securities";
            //string postfix_date_init = "2015-01-01";
            string postfix_date_init = new TableTrade().ConvertDate(DateTime.Now.AddYears(-5));

            DataContext dataContext = new DataContext();
            HttpService httpService = new HttpService();
            Services.Worker.Uri uri = new Services.Worker.Uri(httpService);
            DataBase dataBase = new DataBase(dataContext);

            TableSecurity tableSecurity = new TableSecurity(dataBase);

            if (dataBase.FromSecurityTableCount() == 0)
            {
                tableSecurity.Fill(httpService, uri, url_init);
            }

            TableTrade tableTrade = new TableTrade(uri, httpService, dataBase);

            if (dataBase.FromTradeTableCount() == 0)
            {
                tableTrade.Fill(url_init, postfix_date_init);
            }
            else
            {
                tableTrade.UpdateTable(url_init);
            }

            dataBase.DeleteOldTrades(postfix_date_init);
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
