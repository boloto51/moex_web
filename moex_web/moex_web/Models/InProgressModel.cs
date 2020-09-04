using System;

namespace moex_web.Models
{
    public class InProgressModel
    {
        public string SecId { get; set; }
        public string SecName { get; set; }
        public int Number { get; set; }
        public decimal? BuyPrice { get; set; }
        public decimal? CurrentClose { get; set; }
        public DateTime BuyDate { get; set; }
        public int DaysToSell { get; set; }
        public decimal? Percent => Convert.ToDecimal(String.Format("{0:0.##}", (-1 * (1 - CurrentClose / BuyPrice) * 100)));
    }
}
