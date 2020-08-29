using moex_web.Data.Entities;
using moex_web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Converters
{
    public interface IMonitoringConverter
    {
        public List<MonitoringModel> ToListModels(List<Monitoring> monitorings, List<Security> securities);
    }
}
