using moex_web.Data.Entities;
using moex_web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Converters
{
    public class TradeConverter
    {
        public MonitoringModel ToModel(Security security, Trade trade)
        {
            return new MonitoringModel
            {
                SecId = security.SecId,
                ShortName = security.ShortName,
                TradeDate = trade.TradeDate,
                Close = trade.Close
            };
        }
    }
}
