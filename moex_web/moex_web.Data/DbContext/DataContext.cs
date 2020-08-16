﻿using Microsoft.EntityFrameworkCore;
using moex_web.Data.Entities;

namespace moex_web.Data.DbContext
{
    public class DataContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Security> Securities { get; set; }
        public DbSet<Trade> Trades { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Security>().HasKey(a => new { a.SecId });
            modelBuilder.Entity<Trade>().HasKey(a => new { a.TradeDate, a.SecId });
            modelBuilder.Entity<Security>().HasMany(s => s.Trades);
            modelBuilder.Entity<Trade>().HasOne(t => t.Security);
        }
    }
}
