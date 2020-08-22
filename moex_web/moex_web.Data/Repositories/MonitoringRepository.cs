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
    public class MonitoringRepository : IMonitoringRepository
    {
        private readonly IContextFactory _context;

        public MonitoringRepository(IContextFactory context)
        {
            _context = context;
        }

        public async Task<List<Monitoring>> Get()
        {
            return await _context.GetContext().Monitorings.ToListAsync();
        }

        public async Task<Monitoring> Get(string secId)
        {
            return await _context.GetContext().Monitorings.FirstOrDefaultAsync(s => s.SecId == secId);
        }

        public async Task Add(Monitoring monitoring)
        {
            var context = _context.GetContext();
            context.Monitorings.Add(monitoring);
            await context.SaveChangesAsync();
        }

        public async Task AddRange(List<Monitoring> monitorings)
        {
            var context = _context.GetContext();
            context.Monitorings.AddRange(monitorings);
            await context.SaveChangesAsync();
        }

        //public async Task<List<Security>> GetByTheme(int id)
        //{
        //    return await _context.GetContext().Patterns
        //        .Where(p => p.ThemeId == id).ToListAsync();
        //}

        public async Task Update(Monitoring monitoring)
        {
            var context = _context.GetContext();
            context.Monitorings.Update(monitoring);
            await context.SaveChangesAsync();
        }

        public async Task UpdateRange(List<Monitoring> monitoring)
        {
            var context = _context.GetContext();
            context.Monitorings.UpdateRange(monitoring);
            await context.SaveChangesAsync();
        }

        public async Task Delete(string SecId)
        {
            var context = _context.GetContext();
            var toDelete = await context.Monitorings.FirstOrDefaultAsync(p => p.SecId == SecId);
            context.Monitorings.Remove(toDelete);
            await context.SaveChangesAsync();
        }

        public async Task DeleteOldTrades(List<Monitoring> monitorings)
        {
            var context = _context.GetContext();
            //var trades = await context.Trades.Where(t => DateTime.Compare(t.TradeDate, DateTime.Parse(oldDate)) < 0).ToListAsync();
            //if (trades != null)
            //{
            //    context.Trades.RemoveRange(trades);
            //    context.SaveChanges();
            //}
            context.Monitorings.RemoveRange(monitorings);
            await context.SaveChangesAsync();
        }

        public async Task RemoveRange(List<Monitoring> monitorings)
        {
            var context = _context.GetContext();
            context.Monitorings.RemoveRange(monitorings);
            await context.SaveChangesAsync();
        }
    }
}
