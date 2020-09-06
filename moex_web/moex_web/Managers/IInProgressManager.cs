using moex_web.Data.Entities;
using moex_web.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace moex_web.Managers
{
    public interface IInProgressManager
    {
        public Task AddRecordToTable(int userId, MonitoringBuyModel monitoringBuyModel);
        public Task<List<InProgressModel>> GetModels(int userId);
        public Task Delete(int userId, string secId);
    }
}
