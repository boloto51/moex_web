using moex_web.Data.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace moex_web.Data.Repositories
{
    public interface ITradeHistoryRepository
    {
        public Task Add(TradeHistory tradeHistory);
        public Task<List<TradeHistory>> Get(int userId);
    }
}
