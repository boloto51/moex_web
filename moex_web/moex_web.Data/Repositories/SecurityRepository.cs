﻿using Microsoft.EntityFrameworkCore;
using moex_web.Data.DbContext;
using moex_web.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace moex_web.Data.Repositories
{
    public class SecurityRepository : ISecurityRepository
    {
        private readonly IContextFactory _context;

        public SecurityRepository(IContextFactory context)
        {
            _context = context;
        }

        public async Task<List<Security>> Get()
        {
            return await _context.GetContext().Securities.ToListAsync();
        }

        public async Task<Security> Get(string secId)
        {
            return await _context.GetContext().Securities.FirstOrDefaultAsync(s => s.SecId == secId);
        }

        public async Task AddRange(List<Security> securities)
        {
            var context = _context.GetContext();
            context.Securities.AddRange(securities);
            await context.SaveChangesAsync();
        }

        //public async Task<List<Security>> GetByTheme(int id)
        //{
        //    return await _context.GetContext().Patterns
        //        .Where(p => p.ThemeId == id).ToListAsync();
        //}

        //public async Task Update(Security security)
        //{
        //    security.Theme = null;
        //    var context = _context.GetContext();
        //    context.Patterns.Update(security);
        //    await context.SaveChangesAsync();
        //}

        //public async Task Delete(int id)
        //{
        //    var context = _context.GetContext();
        //    var toDelete = await context.Patterns.FirstOrDefaultAsync(p => p.Id == id);
        //    context.Patterns.Remove(toDelete);
        //    await context.SaveChangesAsync();
        //}
    }
}
