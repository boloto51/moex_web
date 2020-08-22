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
        IUriConverter uriConverter;
        IHttpService httpService;
        ISecurityRepository _securityRepository;
        ITradeRepository _tradeRepository;
        IMonitoringRepository _monitoringRepository;
        IDateConverter _dateConverter;
        ITradeConverter _tradeConverter;
        IConfigSettings _configSettings;

        public MonitoringManager(IUriConverter _uriConverter, IHttpService _httpService, ISecurityRepository securityRepository,
             ITradeRepository tradeRepository, IMonitoringRepository monitoringRepository,
             IDateConverter dateConverter, ITradeConverter tradeConverter, IConfigSettings configSettings)
        {
            uriConverter = _uriConverter;
            httpService = _httpService;
            _securityRepository = securityRepository;
            _tradeRepository = tradeRepository;
            _dateConverter = dateConverter;
            _tradeConverter = tradeConverter;
            _monitoringRepository = monitoringRepository;
            _configSettings = configSettings;
        }

        public async Task UpdateTable()
        {
            var daysAgo = _configSettings.ApplicationKeys.MonitoringUpdaterShedulerDaysAgo;
            var thresholdDropPercent = _configSettings.ApplicationKeys.ThresholdDropPercent;
            var daysRecordStorage = _configSettings.ApplicationKeys.MonitoringDaysRecordStorage;
            var lastTradesInDB = await _tradeRepository.FindLastTrades();
            var agoTradesInDB = await _tradeRepository.FindAgoTrades(daysAgo);
            var monitoringsInDB = await _monitoringRepository.Get();
            //var monitoringForDel = await _monitoringRepository.Get();
            //await _monitoringRepository.RemoveRange(monitoringForDel);

            List<Monitoring> monitorings = new List<Monitoring>();

            foreach (var lastTrade in lastTradesInDB)
            {
                var agoTrade = agoTradesInDB.Find(t => t.SecId == lastTrade.SecId);

                var currentDropPercent = agoTrade.Close != null ? lastTrade.Close / agoTrade.Close * 100 : null;

                if (agoTrade != null && currentDropPercent < 100 && currentDropPercent >= thresholdDropPercent)
                {
                    //monitorings.Add(new Monitoring()
                    //{
                    //    SecId = agoTrade.SecId,
                    //    InitClose = agoTrade.Close,
                    //    CurrentClose = lastTrade.Close,
                    //    Percent = -1 * Math.Round((decimal)(1 - lastTrade.Close / agoTrade.Close),4) * 100,
                    //    DeleteDate = DateTime.Now.AddDays(daysRecordStorage)
                    //});
                    var updateMonitoring = new Monitoring()
                    {
                        SecId = agoTrade.SecId,
                        InitClose = agoTrade.Close,
                        CurrentClose = lastTrade.Close,
                        Percent = -1 * Math.Round((decimal)(1 - lastTrade.Close / agoTrade.Close), 4) * 100,
                        DeleteDate = DateTime.Now.AddDays(daysRecordStorage).Date
                    };

                    var monitoringInDB = monitoringsInDB.Find(m => m.SecId == agoTrade.SecId);

                    if (monitoringInDB != null)
                    {
                        await _monitoringRepository.Update(updateMonitoring);
                    }
                    else
                    {
                        await _monitoringRepository.Add(updateMonitoring);
                    }

                    Console.WriteLine(agoTrade.SecId + "\t" + agoTrade.Close + "\t"
                        + lastTrade.Close + "\t-" + Math.Round((decimal)(1 - lastTrade.Close / agoTrade.Close),4) * 100 + "%");
                }
            }
            //await _monitoringRepository.UpdateRange(monitorings);
        }

        public async Task DeleteOldRecords()
        {
            var monitoringsInDB = await _monitoringRepository.Get();

            foreach (var monitoring in monitoringsInDB)
            {
                if (monitoring.DeleteDate <= DateTime.Now)
                {
                    await _monitoringRepository.Delete(monitoring.SecId);
                    Console.WriteLine(monitoring.SecId + "\t" + monitoring.InitClose + "\t"
                        + monitoring.CurrentClose + "\t" + monitoring.Percent + "\t" + monitoring.DeleteDate);
                }
            }
        }
    }
}
