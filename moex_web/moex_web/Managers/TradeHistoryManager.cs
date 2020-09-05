using moex_web.Data.Entities;
using moex_web.Data.Repositories;
using moex_web.Models;
using System;
using System.Threading.Tasks;

namespace moex_web.Managers
{
    public class TradeHistoryManager : ITradeHistoryManager
    {
        IInProgressRepository _inProgressRepository;
        IUserRepository _userRepository;
        ITradeHistoryRepository _tradeHistoryRepository;

        public TradeHistoryManager(IInProgressRepository inProgressRepository, IUserRepository userRepository, 
            ITradeHistoryRepository tradeHistoryRepository)
        {
            _inProgressRepository = inProgressRepository;
            _userRepository = userRepository;
            _tradeHistoryRepository = tradeHistoryRepository;
        }

        public async Task UpdateTable(string userEmaIL, InProgressSellModel inProgressSellModel)
        {
            var inProgress = await _inProgressRepository.Get(userEmaIL, inProgressSellModel.Id);

            await _tradeHistoryRepository.Add(new TradeHistory()
            {
                UserId = await FindIdByEmail(userEmaIL),
                SecurityId = inProgressSellModel.Id,
                LotCount = inProgressSellModel.LotCount,
                BuyPrice = inProgress.BuyPrice,
                BuyDate = inProgress.BuyDate,
                SellPrice = inProgressSellModel.Price,
                SellDate = inProgressSellModel.Date
            });
        }

        public async Task<int> FindIdByEmail(string email)
        {
            var users = await _userRepository.Get();
            return users.Find(u => u.Email == email).Id;
        }
    }
}
