using moex_web.Converters;
using moex_web.Data.Entities;
using moex_web.Data.Repositories;
using moex_web.Models.JSON;
using moex_web.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace moex_web.Shedulers
{
    public class MonitoringTable : IMonitoringTable
    {
        IUriConverter uriConverter;
        IHttpService httpService;
        ISecurityRepository _securityRepository;
        ITradeRepository _tradeRepository;
        IMonitoringRepository _monitoringRepository;
        IDateConverter _dateConverter;
        ITradeConverter _tradeConverter;

        public MonitoringTable(IUriConverter _uriConverter, IHttpService _httpService, ISecurityRepository securityRepository,
             ITradeRepository tradeRepository, IMonitoringRepository monitoringRepository,
             IDateConverter dateConverter, ITradeConverter tradeConverter)
        {
            uriConverter = _uriConverter;
            httpService = _httpService;
            _securityRepository = securityRepository;
            _tradeRepository = tradeRepository;
            _dateConverter = dateConverter;
            _tradeConverter = tradeConverter;
            _monitoringRepository = monitoringRepository;
        }

        public async Task UpdateTable(int daysAgo)
        {
            var lastTradesInDB = await _tradeRepository.FindLastTrades();
            var agoTradesInDB = await _tradeRepository.FindAgoTrades(daysAgo);

            List<Monitoring> monitoring = new List<Monitoring>();

            foreach (var lastTrade in lastTradesInDB)
            {
                var agoTrade = agoTradesInDB.Find(t => t.SecId == lastTrade.SecId);

                if (agoTrade != null && agoTrade.Close > lastTrade.Close)
                {
                    monitoring.Add(new Monitoring()
                    {
                        SecId = agoTrade.SecId,
                        InitClose = agoTrade.Close,
                        CurrentClose = lastTrade.Close,
                        Percent = -1 * Math.Round((decimal)(1 - lastTrade.Close / agoTrade.Close),4) * 100
                    });
                    Console.WriteLine(agoTrade.SecId + "\t" + agoTrade.Close + "\t"
                        + lastTrade.Close + "\t-" + Math.Round((decimal)(1 - lastTrade.Close / agoTrade.Close),4) * 100 + "%");
                }
            }

            await _monitoringRepository.AddRange(monitoring);
        }
    }
}
