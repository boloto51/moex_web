using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Models
{
    public class MonitoringModel
    {
        public string SecId { get; set; }
        public string SecName { get; set; }
        public decimal? InitClose { get; set; }
        public decimal? CurrentClose { get; set; }
        public string Percent => String.Format("{0:0.##}", (-1 * (1 - CurrentClose / InitClose) * 100));
        //public DateTime DeleteDate { get; set; }
        public DateTime ToBuyDate { get; set; }
    }
}
