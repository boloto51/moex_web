using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using moex_web.Data.DbContext;
using Microsoft.EntityFrameworkCore;
using moex_web.Data.Repositories;
using moex_web.Converters;
using moex_web.Shedulers;
using moex_web.Services;
using moex_web.Core.Config;
using System;
using moex_web.Managers;
using moex_web.Middleware;
using moex_web.Core.RemoteAgents;

namespace moex_web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();

            services.AddDbContextPool<DataContext>(options =>
            {
                options.UseMySql(Configuration.GetConnectionString("DataContext"),
                mySqlOptions => 
                {
                    mySqlOptions.EnableRetryOnFailure(
                            maxRetryCount: 10,
                            maxRetryDelay: TimeSpan.FromSeconds(1),
                            errorNumbersToAdd: null);
                });
            });

            services.AddSingleton<IConfigSettings, ConfigSettings>();
            services.AddScoped<IContextFactory, ContextFactory>();
            services.AddScoped<ISecurityRepository, SecurityRepository>();
            services.AddScoped<ITradeRepository, TradeRepository>();
            services.AddScoped<IMonitoringRepository, MonitoringRepository>();
            services.AddScoped<IInProgressRepository, InProgressRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<ISecurityConverter, SecurityConverter>();
            services.AddScoped<ITradeConverter, TradeConverter>();
            services.AddScoped<ISecurityManager, SecurityManager>();
            services.AddScoped<ITradeManager, TradeManager>();
            services.AddScoped<IMonitoringManager, MonitoringManager>();
            services.AddScoped<IInProgressManager, InProgressManager>();
            services.AddScoped<IUriConverter, UriConverter>();
            services.AddScoped<IHttpService, HttpService>();
            services.AddScoped<IMailAgent, MailAgent>();
            services.AddSingleton<ITradeCleanerSheduler, TradeCleanerSheduler>();
            services.AddSingleton<ITradeUpdaterSheduler, TradeUpdaterSheduler>();
            services.AddSingleton<IMonitoringUpdaterSheduler, MonitoringUpdaterSheduler>();
            services.AddSingleton<IMonitoringCleanerSheduler, MonitoringCleanerSheduler>();
            services.AddSingleton<IDateConverter, DateConverter>();
            services.AddSingleton<IMonitoringConverter, MonitoringConverter>();
            services.AddAntiforgery(options =>
            {
                options.HeaderName = "X-XSRF-TOKEN";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();
            app.UseAntiforgeryToken();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    //pattern: "{controller=Monitoring}/{action=Index}/{id?}");
                    pattern: "{controller=Account}/{action=Login}/{id?}");
            });
        }
    }
}
