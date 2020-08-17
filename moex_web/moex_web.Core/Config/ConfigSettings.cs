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
            //keys.CacheLifeTime = Convert.ToInt32(temp.FirstOrDefault(e => e.Key == "CacheLifeTime")?.Value ?? "500");
            //keys.TradeCleanerShedulerTargetHours = 
            //    temp.FirstOrDefault(e => e.Key == "TradeCleanerShedulerTargetHours").Value != null ?
            //    Convert.ToInt32(temp.FirstOrDefault(e => e.Key == "TradeCleanerShedulerTargetHours").Value) : (int?)null;
            keys.TradeCleanerShedulerTargetHours =
                Convert.ToInt32(temp.FirstOrDefault(e => e.Key == "TradeCleanerShedulerTargetHours")?.Value ?? "0");
            //keys.TradeUpdateShedulerTargetHours =
            //    temp.FirstOrDefault(e => e.Key == "TradeUpdateShedulerTargetHours").Value != null ?
            //    Convert.ToInt32(temp.FirstOrDefault(e => e.Key == "TradeUpdateShedulerTargetHours").Value) : (int?)null;
            keys.TradeUpdateShedulerTargetHours =
                Convert.ToInt32(temp.FirstOrDefault(e => e.Key == "TradeUpdateShedulerTargetHours")?.Value ?? "0");
            keys.TradeCleanerShedulerTargetMinutes = 
                Convert.ToInt32(temp.FirstOrDefault(e => e.Key == "TradeCleanerShedulerTargetMinutes")?.Value ?? "0");
            keys.TradeUpdateShedulerTargetMinutes =
                Convert.ToInt32(temp.FirstOrDefault(e => e.Key == "TradeUpdateShedulerTargetMinutes")?.Value ?? "0");
            keys.TradeCleanerShedulerHoursPeriod =
                Convert.ToInt32(temp.FirstOrDefault(e => e.Key == "TradeCleanerShedulerHoursPeriod")?.Value ?? "24");
            keys.TradeUpdateShedulerHoursPeriod =
                Convert.ToInt32(temp.FirstOrDefault(e => e.Key == "TradeUpdateShedulerHoursPeriod")?.Value ?? "24");
            return keys;
        }
    }
}