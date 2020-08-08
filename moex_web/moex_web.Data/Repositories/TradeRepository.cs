using Microsoft.EntityFrameworkCore;
using moex_web.Data.DbContext;
using moex_web.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace moex_web.Data.Repositories
{
    public class TradeRepository : ITradeRepository
    {
        private readonly IContextFactory _context;

        public TradeRepository(IContextFactory context)
        {
            _context = context;
        }

        public async Task<List<Trade>> Get()
        {
            return await _context.GetContext().Trades.ToListAsync();
        }

        public async Task<Trade> Get(DateTime tradeDate, string secId)
        {
            return await _context.GetContext().Trades.FirstOrDefaultAsync(e => e.SecId == secId && e.TradeDate == tradeDate);
        }

    }
}
