using moex_web.Data.Entities;
using moex_web.Models;
using moex_web.Models.JSON;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Converters
{
    public class TradeConverter : ITradeConverter
    {
        public List<Trade> ToEntity(Root root, List<Trade> tradeFromDB)
        {
            var tradeFromConverter = new List<Trade>();

            foreach (var item in root.history.data)
            {
                var tradeDateFromUrl = item[1].ToString();
                //var secIdFromUrl = item[3].ToString();

                //var tradeDateFromDB = _context.Trades.Where(t => t.SECID == secIdFromUrl &&
                //    t.TRADEDATE.ToString() == tradeDateFromUrl)
                //    .Select(t => t.TRADEDATE).FirstOrDefault().ToString();

                //if (!String.IsNullOrWhiteSpace(item.ToString()) && String.IsNullOrEmpty(tradeDateFromDB))
                //{
                var close = item[11] == null ? null : item[11].ToString();

                if (close != null)
                {
                    //var _close = String.IsNullOrWhiteSpace(close) ? (decimal?)null : Convert.ToDecimal(close.Replace(".", ","));
                    var _close = Convert.ToDecimal(close.Replace(".", ","));

                    tradeFromConverter.Add(new Trade
                    {
                        TradeDate = DateTime.Parse(item[1].ToString()).Date,
                        SecId = item[3].ToString(),
                        Close = _close
                        //CLOSE = String.IsNullOrWhiteSpace(close) ?
                        //    (decimal?)null : Convert.ToDecimal(close.Replace(".", ","))
                    });
                    Console.WriteLine(DateTime.Parse(item[1].ToString()).Date + "\t" + item[3].ToString() + "\t" + _close);
                    //}
                }
            }

            return tradeFromConverter;
        }
    }
}
