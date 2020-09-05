using moex_web.Data.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace moex_web.Data.Repositories
{
    public interface IInProgressRepository
    {
        public Task<List<InProgress>> Get();
        public Task<List<InProgress>> Get(int userId);
        public Task<InProgress> Get(int userId, string secId);
        Task<List<string>> GetUserSecurityIds(int userId);
        public Task Delete(int userId, string SecId);
        public Task Add(InProgress inProgress);
    }
}
