using moex_web.Converters;
using moex_web.Core.Config;
using moex_web.Data.Entities;
using moex_web.Data.Repositories;
using moex_web.Models.JSON;
using moex_web.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace moex_web.Managers
{
    public class MonitoringManager : IMonitoringManager
    {
        ITradeRepository _tradeRepository;
        IMonitoringRepository _monitoringRepository;
        IConfigSettings _configSettings;

        public MonitoringManager(ITradeRepository tradeRepository, 
            IMonitoringRepository monitoringRepository,
            IConfigSettings configSettings)
        {
            _tradeRepository = tradeRepository;
            _monitoringRepository = monitoringRepository;
            _configSettings = configSettings;
        }

        public async Task UpdateTable()
        {
            var daysAgo = _configSettings.ApplicationKeys.MonitoringUpdaterShedulerDaysAgo;
            var thresholdDropPercent = _configSettings.ApplicationKeys.ThresholdDropPercent;
            var lastTradesInDB = await _tradeRepository.FindLastTrades();
            var agoTradesInDB = await _tradeRepository.FindAgoTrades(daysAgo);
            var monitoringsInDB = await _monitoringRepository.Get();
            //var monitoringForDel = await _monitoringRepository.Get();
            //await _monitoringRepository.RemoveRange(monitoringForDel);

            List<Monitoring> monitorings = new List<Monitoring>();

            foreach (var lastTrade in lastTradesInDB)
            {
                var agoTrade = agoTradesInDB.Find(t => t.SecId == lastTrade.SecId);
                //Monitoring sameSecIdInMonitoringTable = monitoringsInDB.Find(m => m.SecId == lastTrade.SecId);
                var monitoringInDB = monitoringsInDB.Find(m => m.SecId == lastTrade.SecId);

                var currentDropPercent = agoTrade.Close != null ? (1 - lastTrade.Close / agoTrade.Close) * 100 : null;

                if (agoTrade != null && monitoringInDB == null 
                    && currentDropPercent < 100 && currentDropPercent >= thresholdDropPercent)
                {
                    var updateMonitoring = new Monitoring()
                    {
                        SecId = agoTrade.SecId,
                        InitClose = agoTrade.Close,
                        CurrentClose = lastTrade.Close,
                        ToBuyDate = DateTime.Now.Date
                    };
                    await _monitoringRepository.Add(updateMonitoring);

                    Console.WriteLine(agoTrade.SecId + "\t" + agoTrade.Close + "\t"
                        + lastTrade.Close + "\t-" + Math.Round((decimal)(1 - lastTrade.Close / agoTrade.Close),4) * 100 + "%");
                }
            }
        }

        public async Task DeleteOldRecords()
        {
            var daysRecordStorage = _configSettings.ApplicationKeys.MonitoringDaysRecordStorage;
            var monitoringsInDB = await _monitoringRepository.Get();

            foreach (var monitoring in monitoringsInDB)
            {
                if (monitoring.ToBuyDate.AddDays(daysRecordStorage) <= DateTime.Now)
                {
                    await _monitoringRepository.Delete(monitoring.SecId);
                    Console.WriteLine(monitoring.SecId + "\t" + monitoring.InitClose + "\t"
                        + monitoring.CurrentClose + "\t" + monitoring.ToBuyDate);
                }
            }
        }

        public async Task DeleteRecord(string secId)
        {
            await _monitoringRepository.Delete(secId);
        }
    }
}
