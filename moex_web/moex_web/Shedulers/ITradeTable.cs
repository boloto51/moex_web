using moex_web.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Shedulers
{
    public interface ITradeTable
    {
        public void Fill(string url_init, string postfix_date_init);
        public void StartFromSpecifiedPage(string url_init, string secId, string postfix_date_init);
        public void UpdateTable(string url_init);
    }
}
