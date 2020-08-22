using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Managers
{
    public interface IMonitoringManager
    {
        public Task UpdateTable();
        public Task DeleteOldRecords();
    }
}
