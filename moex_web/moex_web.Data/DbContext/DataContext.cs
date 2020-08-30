using Microsoft.EntityFrameworkCore;
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
        public DbSet<Monitoring> Monitorings { get; set; }
        public DbSet<InProgress> InProgresses { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Security>().HasKey(a => new { a.SecId });
            modelBuilder.Entity<Trade>().HasKey(a => new { a.TradeDate, a.SecId });
            modelBuilder.Entity<Security>().HasMany(s => s.Trades);
            modelBuilder.Entity<Trade>().HasOne(t => t.Security);
            //modelBuilder.Entity<Monitoring>().HasKey(a => new { a.SecId });
            //modelBuilder.Entity<Monitoring>().HasOne(t => t.Security);
            //modelBuilder.Entity<InProgress>().HasKey(a => new { a.SecId });
            //modelBuilder.Entity<InProgress>().HasOne(t => t.Security);
            //modelBuilder.Entity<Monitoring>().HasOne(t => t.Trade);
        }
    }
}
