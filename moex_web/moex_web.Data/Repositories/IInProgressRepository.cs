using moex_web.Data.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace moex_web.Data.Repositories
{
    public interface IInProgressRepository
    {
        public Task<List<InProgress>> Get();
        public Task<List<InProgress>> Get(string userEmail);
        public Task<InProgress> Get(string userEmail, string secId);
        public Task Delete(int userId, string SecId);
        public Task Add(InProgress inProgress);
    }
}
