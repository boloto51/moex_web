using moex_web.Converters;
using moex_web.Data.Entities;
using moex_web.Data.Repositories;
using moex_web.Models.JSON;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Shedulers
{
    public interface IDataBase
    {
        public List<Security> FromSecurityTable();
        public List<Trade> FromTradeTable();
        public int FromSecurityTableCount();
        public int FromTradeTableCount();
        public void ToSecurityTableAsync(Root root);
        public void ToSecurityTable(Root root);
        public void ToTradeTable(Root root);
        //public List<Trade> FindLastTrades();
        //public void DeleteOldTrades(string oldDate);
    }
}
