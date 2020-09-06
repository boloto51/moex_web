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

        public async Task AddRecordToTable(int userId, InProgressSellModel inProgressSellModel)
        {
            var inProgress = await _inProgressRepository.Get(userId, inProgressSellModel.Id);

            await _tradeHistoryRepository.Add(new TradeHistory()
            {
                UserId = userId,
                SecurityId = inProgressSellModel.Id,
                LotCount = inProgressSellModel.LotCount,
                BuyPrice = inProgress.BuyPrice,
                BuyDate = inProgress.BuyDate,
                SellPrice = inProgressSellModel.Price,
                SellDate = inProgressSellModel.Date
            });
        }
    }
}
