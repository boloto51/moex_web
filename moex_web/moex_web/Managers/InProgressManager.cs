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
        IUserRepository _userRepository;

        public InProgressManager(IInProgressRepository inProgressRepository, IUserRepository userRepository)
        {
            _inProgressRepository = inProgressRepository;
            _userRepository = userRepository;
        }

        public async Task UpdateTable(string userName, MonitoringBuyModel monitoringBuyModel)
        {
            await _inProgressRepository.Add(new InProgress()
            {
                UserId = FindIdByName(userName).Result,
                SecId = monitoringBuyModel.Id,
                BuyPrice = monitoringBuyModel.Price,
                BuyDate = monitoringBuyModel.Date
            });
        }

        public async Task<int> FindIdByName(string name)
        {
            var users = await _userRepository.Get();
            return users.Find(u => u.Name == name).Id;
        }
    }
}
