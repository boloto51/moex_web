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
    public class TradeHistoryRepository : ITradeHistoryRepository
    {
        private readonly IContextFactory _context;

        public TradeHistoryRepository(IContextFactory context)
        {
            _context = context;
        }

        //public async Task<List<InProgress>> Get()
        //{
        //    return await _context.GetContext().InProgresses.ToListAsync();
        //}

        //public async Task<List<TradeHistory>> Get(string userEmail)
        //{
        //    var userId = await _context.GetContext().Users.Where(u => u.Email == userEmail).Select(u => u.Id).FirstOrDefaultAsync();
        //    return await _context.GetContext().TradeHistories.Where(i => i.UserId == userId).ToListAsync();
        //}

        //public async Task Delete(string SecId)
        //{
        //    var context = _context.GetContext();
        //    var toDelete = await context.InProgresses.FirstOrDefaultAsync(p => p.SecId == SecId);
        //    context.InProgresses.Remove(toDelete);
        //    await context.SaveChangesAsync();
        //}

        public async Task Add(TradeHistory tradeHistory)
        {
            var context = _context.GetContext();
            context.TradeHistories.Add(tradeHistory);
            await context.SaveChangesAsync();
        }
    }
}
