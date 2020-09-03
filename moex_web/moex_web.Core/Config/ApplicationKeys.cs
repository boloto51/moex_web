using System;

namespace moex_web.Core.Config
{
    public class ApplicationKeys
    {
        public virtual TimeSpan TradeCleanerShedulerStartTime { get; set; }
        public virtual TimeSpan TradeUpdaterShedulerStartTime { get; set; }
        public virtual TimeSpan MonitoringUpdaterShedulerStartTime { get; set; }
        public virtual int MonitoringUpdaterShedulerDaysAgo { get; set; }
        public virtual TimeSpan MonitoringCleanerShedulerStartTime { get; set; }
        public virtual int ThresholdDropPercent { get; set; }
        public virtual int MonitoringDaysRecordStorage { get; set; }
        public virtual string UrlInit { get; set; }
        public virtual int NumberYearsAgo { get; set; }
        public virtual int DaysToSell { get; set; }
        public virtual int CacheLifeTime { get; set; }
        public virtual string MailFrom { get; set; }
        public virtual string MailServer { get; set; }
        public virtual string MailPass { get; set; }
    }
}