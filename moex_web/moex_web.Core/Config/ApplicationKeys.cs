using System;

namespace moex_web.Core.Config
{
    public class ApplicationKeys
    {
        public virtual TimeSpan TradeCleanerShedulerStartTime { get; set; }
        public virtual TimeSpan TradeUpdaterShedulerStartTime { get; set; }
    }
}