using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Models
{
    public class MonitoringModel
    {
        public string SecId { get; set; }
        public decimal? InitClose { get; set; }
        public decimal? CurrentClose { get; set; }
        public decimal? Percent { get; set; }
        public DateTime DeleteDate { get; set; }
    }
}
