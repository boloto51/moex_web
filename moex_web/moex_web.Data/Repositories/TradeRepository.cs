using Microsoft.EntityFrameworkCore;
using moex_web.Data.DbContext;
using moex_web.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task AddRange(List<Trade> trades)
        {
            var context = _context.GetContext();
            context.Trades.AddRange(trades);
            await context.SaveChangesAsync();
        }

        public async Task<List<Trade>> FindLastTrades()
        {
            var context = _context.GetContext();
            return await context.Trades.GroupBy(t => t.SecId)
                        .Select(g => new Trade()
                        {
                            SecId = g.Key,
                            TradeDate = g.Select(t => t.TradeDate).LastOrDefault(),
                            Close = g.Select(t => t.Close).LastOrDefault()
                        }).ToListAsync();
        }

        public async void DeleteOldTrades(string oldDate)
        {
            var context = _context.GetContext();
            var trades = await context.Trades.Where(t => DateTime.Compare(t.TradeDate, DateTime.Parse(oldDate)) < 0).ToListAsync();
            context.Trades.RemoveRange(trades);
            context.SaveChanges();
        }
    }
}
