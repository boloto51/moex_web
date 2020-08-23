using System;
using Microsoft.Extensions.Hosting;

namespace moex_web.Shedulers
{
    public interface IMonitoringUpdaterSheduler : IHostedService, IDisposable
    {
    }
}
