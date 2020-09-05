﻿using Microsoft.EntityFrameworkCore;
using moex_web.Data.DbContext;
using moex_web.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moex_web.Data.Repositories
{
    public class InProgressRepository : IInProgressRepository
    {
        private readonly IContextFactory _context;

        public InProgressRepository(IContextFactory context)
        {
            _context = context;
        }

        public async Task<List<InProgress>> Get()
        {
            return await _context.GetContext().InProgresses.ToListAsync();
        }

        public async Task<List<InProgress>> Get(int userId)
        {
            //var userId = await _context.GetContext().Users.Where(u => u.Email == userEmail).Select(u => u.Id).FirstOrDefaultAsync();
            return await _context.GetContext().InProgresses.Where(i => i.UserId == userId).ToListAsync();
        }

        public async Task<List<string>> GetUserSecurityIds(int userId)
        {
            return await _context.GetContext().InProgresses
                .Include(ip => ip.User)
                .Where(i => i.User.Id == userId)
                .Select(ip => ip.SecId).ToListAsync();
        }

        public async Task<InProgress> Get(int userId, string secId)
        {
            return await _context.GetContext().InProgresses.Where(i => i.UserId == userId && i.SecId == secId).FirstOrDefaultAsync();
        }

        public async Task Delete(int userId, string secId)
        {
            var context = _context.GetContext();
            var toDelete = await context.InProgresses.FirstOrDefaultAsync(p => p.UserId == userId && p.SecId == secId);
            context.InProgresses.Remove(toDelete);
            await context.SaveChangesAsync();
        }

        public async Task Add(InProgress inProgress)
        {
            var context = _context.GetContext();
            context.InProgresses.Add(inProgress);
            await context.SaveChangesAsync();
        }
    }
}
