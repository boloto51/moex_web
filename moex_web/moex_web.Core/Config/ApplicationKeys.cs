﻿namespace moex_web.Core.Config
{
    public class ApplicationKeys
    {
        public virtual int TradeCleanerShedulerTargetHours { get; set; }
        public virtual int TradeCleanerShedulerTargetMinutes { get; set; }
        public virtual int TradeCleanerShedulerHoursPeriod { get; set; }
        public virtual int TradeUpdateShedulerTargetHours { get; set; }
        public virtual int TradeUpdateShedulerTargetMinutes { get; set; }
        public virtual int TradeUpdateShedulerHoursPeriod { get; set; }
    }
}