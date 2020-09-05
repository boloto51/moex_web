using moex_web.Models;
using System.Threading.Tasks;

namespace moex_web.Managers
{
    public interface ITradeHistoryManager
    {
        public Task AddRecordToTable(int userId, InProgressSellModel inProgressSellModel);
    }
}
