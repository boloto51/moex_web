using moex_web.Data.Entities;
using System.Threading.Tasks;

namespace moex_web.Data.Repositories
{
    public interface ITradeHistoryRepository
    {
        public Task Add(TradeHistory tradeHistory);
    }
}
