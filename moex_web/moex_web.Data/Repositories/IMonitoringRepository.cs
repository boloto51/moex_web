using moex_web.Data.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace moex_web.Data.Repositories
{
    public interface IMonitoringRepository
    {
        Task<List<Monitoring>> Get();
        public Task<List<Monitoring>> Get(List<string> inProgresses);
        public Task<Monitoring> Get(string secId);
        public Task Add(Monitoring monitoring);
        public Task AddRange(List<Monitoring> monitorings);
        public Task Update(Monitoring monitoring);
        public Task UpdateRange(List<Monitoring> monitoring);
        public Task Delete(string secId);
        public Task RemoveRange(List<Monitoring> monitorings);
    }
}
