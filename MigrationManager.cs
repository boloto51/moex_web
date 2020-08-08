using Basf.Messenger.Data.DbContext;
using Basf.Messenger.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Basf.Messenger.Config
{
    public static class MigrationManager
    {
        public static IHost MigrateDatabase(this IHost host)
        {
            using (var scope = host.Services.CreateScope())
            {
                using var securityDbContext = scope.ServiceProvider.GetRequiredService<SecurityDbContext>();
                using var messageContext = scope.ServiceProvider.GetRequiredService<MessageContext>();
                securityDbContext.Database.Migrate();
                messageContext.Database.Migrate();
            }

            return host;
        }
    }
}