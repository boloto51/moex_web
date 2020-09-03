using moex_web.Converters;
using moex_web.Core.Config;
using moex_web.Data.Entities;
using moex_web.Data.Repositories;
using moex_web.Models;
using System;
using System.Collections.Generic;
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

        public async Task<List<InProgressModel>> GetModels(string userEmail)
        {
            var securities = await _securityRepository.Get();
            var trades = await _tradeRepository.FindLastTrades();
            var inProgresses = await _inProgressRepository.Get(userEmail);
            var daysToSell = _configSettings.ApplicationKeys.DaysToSell;
            return _inProgressConverter.ToListModels(inProgresses, securities, trades, daysToSell);
        }

        public async Task UpdateTable(string userEmaiL, MonitoringBuyModel monitoringBuyModel)
        {
            await _inProgressRepository.Add(new InProgress()
            {
                UserId = FindIdByEmail(userEmaiL).Result,
                SecId = monitoringBuyModel.Id,
                BuyPrice = monitoringBuyModel.Price,
                BuyNumber = monitoringBuyModel.Number,
                BuyDate = monitoringBuyModel.Date
            });
        }

        public async Task<int> FindIdByEmail(string email)
        {
            var users = await _userRepository.Get();
            return users.Find(u => u.Email == email).Id;
        }

        public async Task Delete(string userEmail, string secId)
        {
            var userId = FindIdByEmail(userEmail).Result;
            await _inProgressRepository.Delete(userId, secId);
        }
    }
}
