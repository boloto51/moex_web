using moex_web.Data.Entities;
using moex_web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Converters
{
    public class MonitoringConverter : IMonitoringConverter
    {
        public List<MonitoringModel> ToListModels(string userId, List<Monitoring> monitorings, List<Security> securities)
        {
            var monitoringModel = new List<MonitoringModel>();             

            foreach (var monitoring in monitorings)
            {
                monitoringModel.Add(new MonitoringModel 
                {
                    UserId = userId,
                    SecId = monitoring.SecId,
                    SecName = securities.Find(s => s.SecId == monitoring.SecId).ShortName,
                    InitClose = monitoring.InitClose,
                    CurrentClose = monitoring.CurrentClose,
                    ToBuyDate = monitoring.ToBuyDate
                });
            }

            return monitoringModel;
        }
    }
}
