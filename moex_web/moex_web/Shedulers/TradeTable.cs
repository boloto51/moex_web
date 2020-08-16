using moex_web.Converters;
using moex_web.Data.Repositories;
using moex_web.Models.JSON;
using moex_web.Services;
using System;
using System.Threading.Tasks;

namespace moex_web.Shedulers
{
    class TradeTable : ITradeTable
    {
        IUriConverter uri;
        IHttpService httpService;
        IDataBase dataBase;
        ISecurityRepository _securityRepository;
        ITradeRepository _tradeRepository;

        //public TradeTable() { }

        public TradeTable(IUriConverter _uri, IHttpService _httpService, IDataBase _dataBase,
            ISecurityRepository securityRepository, ITradeRepository tradeRepository)
        {
            uri = _uri;
            httpService = _httpService;
            dataBase = _dataBase;
            _securityRepository = securityRepository;
            _tradeRepository = tradeRepository;
        }

        public void Fill(string url_init, string postfix_date_init)
        {
            var secList = dataBase.FromSecurityTable();

            foreach (var secItem in secList)
            {
                StartFromSpecifiedPage(url_init, secItem.SecId, postfix_date_init);
            }
        }

        public async void StartFromSpecifiedPage(string url_init, string secId, string postfix_date_init)
        {
            string postfix_json = ".json";
            string postfix_from = "?from=";

            var date = postfix_date_init;
            var dateEnd = ConvertDate(DateTime.Now.Date.AddDays(-1)).ToString();

            while (DateTime.Compare(DateTime.Parse(date), DateTime.Parse(dateEnd)) <= 0)
            {
                var url = uri.ConcatenateUrlFrom(url_init, secId, postfix_json, postfix_from, date);
                Root root = httpService.GetAsync1<Root>(url).Result;

                if (root != null)
                {
                    int count = uri.GetPageLastDataCount(root);

                    if (count != 0)
                    {
                        var pageLastData = uri.GetPageLastData(root, count);
                        await Task.Run(() => dataBase.ToTradeTable(root));
                        date = ConvertDate(pageLastData.Date.AddDays(1));
                    }
                    else
                    {
                        date = ConvertDate(DateTime.Parse(date).Date.AddDays(1));
                    }
                }
                else
                {
                    date = ConvertDate(DateTime.Parse(date).Date.AddDays(1));
                }
            }
        }

        public string ConvertDate(DateTime date)
        {
            var month = date.Month.ToString().Length < 2 ? "0" + date.Month.ToString() : date.Month.ToString();
            var day = date.Day.ToString().Length < 2 ? "0" + date.Day.ToString() : date.Day.ToString();
            return date.Year.ToString() + "-" + month + "-" + day;
        }

        public void UpdateTable(string url_init)
        {
            //var lastTradesInDB = dataBase.FindLastTrades();
            var lastTradesInDB = _tradeRepository.FindLastTrades().Result;
            //var lastTradesInDB = _tradeRepository.FindLastTrades().Result;

            foreach (var lastTrade in lastTradesInDB)
            {
                string postfix_date_last = ConvertDate(lastTrade.TradeDate.Date.AddDays(1));
                StartFromSpecifiedPage(url_init, lastTrade.SecId, postfix_date_last);
            }
        }
    }
}
