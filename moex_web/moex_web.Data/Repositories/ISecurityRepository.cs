using moex_web.Data.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace moex_web.Data.Repositories
{
    public interface ISecurityRepository
    {
        Task<List<Security>> Get();
        Task<Security> Get(string secId);
        //Task<int> Create(Security security);
        //Task Update(Security security);
        //Task Delete(string secId);
        //Task<List<Security>> GetBySECID(string secId);
    }
}
