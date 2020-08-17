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
        IUriConverter uriConverter;
        IHttpService httpService;
        ISecurityRepository _securityRepository;
        ITradeRepository _tradeRepository;
        IDateConverter _dateConverter;
        ITradeConverter _tradeConverter;

        public TradeTable(IUriConverter _uriConverter, IHttpService _httpService, ISecurityRepository securityRepository,
             ITradeRepository tradeRepository, IDateConverter dateConverter, ITradeConverter tradeConverter)
        {
            uriConverter = _uriConverter;
            httpService = _httpService;
            _securityRepository = securityRepository;
            _tradeRepository = tradeRepository;
            _dateConverter = dateConverter;
            _tradeConverter = tradeConverter;
        }

        public async void Fill(string url_init, string postfix_date_init)
        {
            var secList = await _securityRepository.Get(); // dataBase.FromSecurityTable();

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
            var dateEnd = _dateConverter.ConvertDate(DateTime.Now.Date.AddDays(-1)).ToString();

            while (DateTime.Compare(DateTime.Parse(date), DateTime.Parse(dateEnd)) <= 0)
            {
                var url = uriConverter.ConcatenateUrlFrom(url_init, secId, postfix_json, postfix_from, date);
                Root root = httpService.GetAsync1<Root>(url).Result;

                if (root != null)
                {
                    int count = uriConverter.GetPageLastDataCount(root);

                    if (count != 0)
                    {
                        var pageLastData = uriConverter.GetPageLastData(root, count);
                        await Task.Run(() => ToTradeTable(root));
                        date = _dateConverter.ConvertDate(pageLastData.Date.AddDays(1));
                    }
                    else
                    {
                        date = _dateConverter.ConvertDate(DateTime.Parse(date).Date.AddDays(1));
                    }
                }
                else
                {
                    date = _dateConverter.ConvertDate(DateTime.Parse(date).Date.AddDays(1));
                }
            }
        }

        public async void UpdateTable(string url_init)
        {
            //var lastTradesInDB = dataBase.FindLastTrades();
            var lastTradesInDB = await _tradeRepository.FindLastTrades();
            //var lastTradesInDB = _tradeRepository.FindLastTrades().Result;

            foreach (var lastTrade in lastTradesInDB)
            {
                string postfix_date_last = _dateConverter.ConvertDate(lastTrade.TradeDate.Date.AddDays(1));
                await Task.Run(() => StartFromSpecifiedPage(url_init, lastTrade.SecId, postfix_date_last));
                //StartFromSpecifiedPage(url_init, lastTrade.SecId, postfix_date_last);
            }
        }

        public async void ToTradeTable(Root root)
        {
            var tradeFromDB = await _tradeRepository.Get(); // FromTradeTable();
            var tradeFromConverter = _tradeConverter.ToEntity(root, tradeFromDB);
            await _tradeRepository.AddRange(tradeFromConverter);
        }

    }
}
