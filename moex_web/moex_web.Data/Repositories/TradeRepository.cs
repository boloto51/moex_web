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
            return context.Trades.ToList().GroupBy(t => t.SecId)
                        .Select(g => new Trade()
                        {
                            SecId = g.Key,
                            TradeDate = g.Select(t => t.TradeDate).LastOrDefault(),
                            Close = g.Select(t => t.Close).LastOrDefault()
                        }).ToList();
        }

        public async Task<List<Trade>> FindLastTrades(List<string> restrictInProgress)
        {
            var context = _context.GetContext();
            return context.Trades.Where(t => restrictInProgress.Contains(t.SecId))
                .ToList().GroupBy(t => t.SecId).Select(g => new Trade()
                        {
                            SecId = g.Key,
                            TradeDate = g.Select(t => t.TradeDate).LastOrDefault(),
                            Close = g.Select(t => t.Close).LastOrDefault()
                        }).ToList();
        }

        public async Task DeleteOldTrades(DateTime oldDate)
        {
            var context = _context.GetContext();
            var trades = await context.Trades.Where(t => DateTime.Compare(t.TradeDate, oldDate) < 0).ToListAsync();
            if (trades != null)
            {
                context.Trades.RemoveRange(trades);
                await context.SaveChangesAsync();
            }
        }

        public async Task<List<Trade>> FindAgoTrades(int daysAgo)
        {
            var context = _context.GetContext();
            return context.Trades.ToList().Where(t => t.TradeDate <= DateTime.Now.AddDays(-1 * daysAgo))
                .OrderByDescending(t => t.TradeDate).GroupBy(t => t.SecId).Select(g => new Trade()
                {
                    SecId = g.Key,
                    TradeDate = g.Select(t => t.TradeDate).FirstOrDefault(),
                    Close = g.Select(t => t.Close).FirstOrDefault()
                }).ToList();
        }
    }
}
