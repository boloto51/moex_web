using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Models
{
    public class MonitoringModel
    {
        public string SecId { get; set; }
        public string ShortName { get; set; }
        public DateTime TradeDate { get; set; }
        public decimal? Close { get; set; }
    }
}
