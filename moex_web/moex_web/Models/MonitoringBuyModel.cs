using System;

namespace moex_web.Models
{
    public class MonitoringBuyModel
    {
        public string SecId { get; set; }
        public decimal? BuyPrice { get; set; }
        public DateTime BuyDate { get; set; }
        public string UserId { get; set; }
    }
}
