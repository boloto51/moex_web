using moex_web.Converters;
using moex_web.Core.Config;
using moex_web.Data.Entities;
using moex_web.Data.Repositories;
using moex_web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Managers
{
    public class InProgressManager : IInProgressManager
    {
        IInProgressRepository _inProgressRepository;
        IUserRepository _userRepository;
        private readonly ISecurityRepository _securityRepository;
        private readonly ITradeRepository _tradeRepository;
        private IInProgressConverter _inProgressConverter;
        private IConfigSettings _configSettings;

        public InProgressManager(IInProgressRepository inProgressRepository, IUserRepository userRepository,
            ISecurityRepository securityRepository, ITradeRepository tradeRepository,
            IConfigSettings configSettings, IInProgressConverter inProgressConverter)
        {
            _inProgressRepository = inProgressRepository;
            _userRepository = userRepository;
            _securityRepository = securityRepository;
            _tradeRepository = tradeRepository;
            _configSettings = configSettings;
            _inProgressConverter = inProgressConverter;
        }

        public async Task<List<InProgressModel>> GetModels(int userId)
        {
            var inProgresses = await _inProgressRepository.Get(userId);
            var securities = await _securityRepository.Get(inProgresses.Select(ip => ip.SecId).ToList());
            var trades = await _tradeRepository.FindLastTrades(inProgresses.Select(ip => ip.SecId).ToList());            
            var daysToSell = _configSettings.ApplicationKeys.DaysToSell;
            return _inProgressConverter.ToListModels(inProgresses, securities, trades, daysToSell);
        }

        public async Task AddRecordToTable(int userId, MonitoringBuyModel monitoringBuyModel)
        {
            await _inProgressRepository.Add(new InProgress()
            {
                UserId = userId,
                SecId = monitoringBuyModel.Id,
                BuyPrice = monitoringBuyModel.Price,
                LotCount = monitoringBuyModel.LotCount,
                BuyDate = monitoringBuyModel.Date
            });
        }

        public async Task Delete(int userId, string secId)
        {
            await _inProgressRepository.Delete(userId, secId);
        }
    }
}
