using moex_web.Data.Entities;
using moex_web.Data.Repositories;
using moex_web.Models;
using System;
using System.Threading.Tasks;

namespace moex_web.Managers
{
    public class InProgressManager : IInProgressManager
    {
        IInProgressRepository _inProgressRepository;

        public InProgressManager(IInProgressRepository inProgressRepository)
        {
            _inProgressRepository = inProgressRepository;
        }

        public async Task UpdateTable(MonitoringBuyModel monitoringBuyModel)
        {
            await _inProgressRepository.Add(new InProgress()
            {
                SecId = monitoringBuyModel.Id,
                BuyPrice = monitoringBuyModel.Price,
                BuyDate = monitoringBuyModel.Date
            });
        }
    }
}
