using moex_web.Data.Entities;
using moex_web.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace moex_web.Managers
{
    public interface IInProgressManager
    {
        public Task UpdateTable(string userId, MonitoringBuyModel monitoringBuyModel);
        public Task<int> FindIdByEmail(string email);
        public Task<List<InProgressModel>> GetModels(string userEmail);
        public Task Delete(string userEmail, string secId);
    }
}
