using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Models
{
    public class TradeModel
    {
        public DateTime TradeDate { get; set; }
        public string SecId { get; set; }
        public decimal Close { get; set; }
    }
}
