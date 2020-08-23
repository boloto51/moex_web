using Microsoft.Extensions.Hosting;
using System;

namespace moex_web.Shedulers
{
    public interface ITradeCleanerSheduler : IHostedService, IDisposable
    {
    }
}
