using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using moex_web.Core.Config;
using Microsoft.Extensions.DependencyInjection;
using moex_web.Shedulers;

namespace moex_web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //CreateHostBuilder(args).Build().Run();
            CreateHostBuilder(args).Build().MigrateDatabase().Run();
        }

        //public static IHostBuilder CreateHostBuilder(string[] args) =>
        //    Host.CreateDefaultBuilder(args)
        //        .ConfigureWebHostDefaults(webBuilder =>
        //        {
        //            webBuilder.UseStartup<Startup>();
        //        })
        //        .ConfigureServices(services =>
        //        {
        //            //services.AddHostedService<Worker>();
        //            services.AddHostedService<TradeCleanerSheduler>();
        //        })
        //    .ConfigureServices(services =>
        //    {
        //        services.AddHostedService<TradeUpdateSheduler>();
        //    });

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                })
                .ConfigureServices(services =>
                {
                    services.AddHostedService<TradeUpdateSheduler>();
                });
    }
}
