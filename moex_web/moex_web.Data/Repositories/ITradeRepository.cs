using moex_web.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace moex_web.Data.Repositories
{
    public interface ITradeRepository
    {
        Task<List<Trade>> Get();
        Task<Trade> Get(DateTime tradeDate, string secId);
    }
}
