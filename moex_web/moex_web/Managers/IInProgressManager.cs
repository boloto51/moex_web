using moex_web.Models;
using System.Threading.Tasks;

namespace moex_web.Managers
{
    public interface IInProgressManager
    {
        public Task UpdateTable(MonitoringBuyModel monitoringBuyModel);
    }
}
