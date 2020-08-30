using moex_web.Data.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace moex_web.Data.Repositories
{
    public interface IInProgressRepository
    {
        public Task<List<InProgress>> Get();
        public Task Delete(string SecId);
        public Task Add(InProgress inProgress);
    }
}
