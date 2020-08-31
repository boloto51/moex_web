using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using moex_web.Core.Utils;
using moex_web.Data.DbContext;
using moex_web.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace moex_web.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IContextFactory _context;

        public UserRepository(IContextFactory context)
        {
            _context = context;
        }

        public async Task<List<User>> Get()
        {
            return await _context.GetContext().Users.ToListAsync();
        }

        public async Task<User> Get(string email, string pass)
        {
            var hash = PasswordHashHelper.HashPassword(pass);
            //return await _context.GetContext().Users.FirstOrDefaultAsync(u => u.Email == email && u.Password ==hash);
            return await _context.GetContext().Users.FirstOrDefaultAsync(u => u.Password == hash);
        }

        public async Task Add(User user)
        {
            user.Password = PasswordHashHelper.HashPassword(user.Password);
            user.Created = DateTime.Now;
            user.Role = Role.User;
            var context = _context.GetContext();
            context.Users.Add(user);
            await context.SaveChangesAsync();
        }

        public async Task<bool> CheckExisting(string email)
        {
            return await _context.GetContext().Users.AnyAsync(u => u.Email == email);
        }

        public async Task<User> Get(string email)
        {
            return await _context.GetContext().Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task<string> Forgot(int userId)
        {
            var context = _context.GetContext();
            var token = Guid.NewGuid().ToString("N");
            context.ResetEntries.Add(new ResetEntry { UserId = userId, Expires = DateTime.Now.AddHours(2), Token = token });
            await context.SaveChangesAsync();
            return token;
        }

        public async Task<bool> Reset(string token, string password)
        {
            var context = _context.GetContext();
            var reset = await context.ResetEntries.FirstOrDefaultAsync(r => r.Token == token);
            if (reset == null) return false;
            if (reset.Expires > DateTime.Now)
            {
                context.ResetEntries.Remove(reset);
                await context.SaveChangesAsync();
                return false;
            }
            reset.User.Password = PasswordHashHelper.HashPassword(password);
            await context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> AllowLogin(int userId)
        {
            var context = _context.GetContext();
            var attempts = await context.LoginAttempts.Where(l => l.UserId == userId).ToListAsync();
            var minTime = DateTime.Now.AddMinutes(-15);
            if (attempts.Count(a => a.LastTry >= minTime) > 3) return false;
            context.LoginAttempts.Add(new LoginAttempt { UserId = userId, LastTry = DateTime.Now });
            await context.SaveChangesAsync();
            return true;
        }

        public async Task AttemptReset(int userId)
        {
            var context = _context.GetContext();
            var attempts = await context.LoginAttempts.Where(l => l.UserId == userId).ToListAsync();
            context.LoginAttempts.RemoveRange(attempts);
            await context.SaveChangesAsync();
        }

        //public int[] GetThemes(string? mail)
        //{
        // if (String.IsNullOrWhiteSpace(mail)) return new int[0];
        // return _context.GetContext().Users
        //  .Include(u => u.Themes)
        //  .AsNoTracking().First(u => u.Email == mail)
        //  .Themes.Select(t => t.ThemeId)
        //  .ToArray();
        //}

        //public async Task SetLearnedState(int userId, int themeId, bool state)
        //{
        //    var context = _context.GetContext();
        //    var existingEntry = context.UserThemes.FirstOrDefault(t => t.UserId == userId && t.ThemeId == themeId);
        //    if (state && existingEntry == null)
        //    {
        //        context.UserThemes.Add(new UserTheme{UserId = userId, ThemeId = themeId});
        //    } else if (!state && existingEntry != null)
        //    {
        //        context.UserThemes.Remove(existingEntry);
        //    }

        //    await context.SaveChangesAsync();
        //}
    }
}