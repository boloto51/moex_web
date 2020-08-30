using System;
using System.Linq;
using Microsoft.Extensions.Configuration;

namespace moex_web.Core.Config
{
    public class ConfigSettings : IConfigSettings
    {
        private readonly IConfiguration _configuration;

        public ConfigSettings(IConfiguration configuration)
        {
            _configuration = configuration;
            ConnectionString = _configuration.GetSection("ConnectionStrings")["DataContext"];
            ApplicationKeys = SetApplicationKeys();
        }

        public string ConnectionString { get; set; }
        public ApplicationKeys ApplicationKeys { get; set; }

        private ApplicationKeys SetApplicationKeys()
        {
            var keys = new ApplicationKeys();
            var temp = _configuration.GetSection("appKeys").GetChildren().ToList();
            keys.TradeCleanerShedulerStartTime =
                TimeSpan.Parse(temp.FirstOrDefault(e => e.Key == "TradeCleanerShedulerStartTime")?.Value ?? "0:00");
            keys.TradeUpdaterShedulerStartTime =
                TimeSpan.Parse(temp.FirstOrDefault(e => e.Key == "TradeUpdaterShedulerStartTime")?.Value ?? "0:00");
            keys.MonitoringUpdaterShedulerStartTime =
                TimeSpan.Parse(temp.FirstOrDefault(e => e.Key == "MonitoringUpdaterShedulerStartTime")?.Value ?? "0:00");
            keys.MonitoringUpdaterShedulerDaysAgo =
                Convert.ToInt32(temp.FirstOrDefault(e => e.Key == "MonitoringUpdaterShedulerDaysAgo")?.Value ?? "30");
            keys.MonitoringCleanerShedulerStartTime =
                TimeSpan.Parse(temp.FirstOrDefault(e => e.Key == "MonitoringCleanerShedulerStartTime")?.Value ?? "0:00");
            keys.ThresholdDropPercent =
                Convert.ToInt32(temp.FirstOrDefault(e => e.Key == "ThresholdDropPercent")?.Value ?? "10");
            keys.MonitoringDaysRecordStorage =
                Convert.ToInt32(temp.FirstOrDefault(e => e.Key == "MonitoringDaysRecordStorage")?.Value ?? "7");
            keys.UrlInit = temp.FirstOrDefault(e => e.Key == "UrlInit")?.Value ?? 
                "http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/tqbr/securities";
            keys.NumberYearsAgo =
                Convert.ToInt32(temp.FirstOrDefault(e => e.Key == "NumberYearsAgo")?.Value ?? "5");
            keys.DaysToSell =
                Convert.ToInt32(temp.FirstOrDefault(e => e.Key == "DaysToSell")?.Value ?? "50");
            return keys;
        }
    }
}