using System;
using moex_web.Data.DbContext;
using moex_web.Models.JSON;
using moex_web.Data.Entities;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using moex_web.Data.Repositories;
using moex_web.Converters;

namespace moex_web.Shedulers
{
    public class DataBase : IDataBase
    {
        //private DataContext _context;
        ISecurityRepository _securityRepository;
        ITradeRepository _tradeRepository;
        ISecurityConverter _securityConverter;
        ITradeConverter _tradeConverter;

        //public DataBase(DataContext context)
        //{
        //    _context = context;
        //}

        public DataBase(ISecurityRepository securityRepository, ITradeRepository tradeRepository,
            ISecurityConverter securityConverter, ITradeConverter tradeConverter)
        {
            _securityRepository = securityRepository;
            _tradeRepository = tradeRepository;
            _securityConverter = securityConverter;
            _tradeConverter = tradeConverter;
        }

        public List<Security> FromSecurityTable()
        {
            //DataContext context = new DataContext();
            //return _context.Securities.Select(a => a).ToList();
            return _securityRepository.Get().Result;
        }

        public List<Trade> FromTradeTable()
        {
            //DataContext context = new DataContext();
            //return _context.Securities.Select(a => a).ToList();
            return _tradeRepository.Get().Result;
        }

        public int FromSecurityTableCount()
        {
            //DataContext context = new DataContext();
            //return _context.Securities.Count();
            return _securityRepository.Get().Result.Count();
        }

        public int FromTradeTableCount()
        {
            //DataContext context = new DataContext();
            //return _context.Trades.Count();
            return _tradeRepository.Get().Result.Count();
        }

        public async void ToSecurityTableAsync(Root root)
        {
            await Task.Run(() => ToSecurityTable(root));
        }

        public void ToSecurityTable(Root root)
        {
            ////DataContext _context = new DataContext();

            //foreach (var item in root.history.data)
            //{
            //    Console.WriteLine("SECID: {0}\tSHORTNAME: {1}", item[3], item[2]);

            //    if (_context.Securities.Where(a => a.SecId == item[3].ToString())
            //        .Select(a => a.SecId).FirstOrDefault() == null)
            //    {
            //        _context.Securities.Add(new Security
            //        {
            //            SecId = item[3].ToString(),
            //            ShortName = item[2].ToString()
            //        });
            //    }
            //}
            //_context.SaveChanges();

            var secFromDB = FromSecurityTable();
            var secFromConverter = _securityConverter.ToEntity(root, secFromDB);
            _securityRepository.AddRange(secFromConverter);
        }

        //public async void ToTradeTableAsync(Root root, string url_init, string secId, string postfix_json, string postfix_from, string date)
        //{
        //    await Task.Run(() => ToTradeTable(root, url_init, secId, postfix_json, postfix_from, date));
        //}

        public void ToTradeTable(Root root)
        {
            ////DataContext _context = new DataContext();

            //foreach (var item in root.history.data)
            //{
            //    //var tradeDateFromUrl = item[1].ToString();
            //    //var secIdFromUrl = item[3].ToString();

            //    //var tradeDateFromDB = _context.Trades.Where(t => t.SECID == secIdFromUrl &&
            //    //    t.TRADEDATE.ToString() == tradeDateFromUrl)
            //    //    .Select(t => t.TRADEDATE).FirstOrDefault().ToString();

            //    //if (!String.IsNullOrWhiteSpace(item.ToString()) && String.IsNullOrEmpty(tradeDateFromDB))
            //    //{
            //        var close = item[11] == null ? null : item[11].ToString();
            //        var _close = String.IsNullOrWhiteSpace(close) ? (decimal?)null : Convert.ToDecimal(close.Replace(".", ","));

            //        _context.Trades.Add(new Trade
            //        {
            //            TradeDate = DateTime.Parse(item[1].ToString()).Date,
            //            SecId = item[3].ToString(),
            //            Close = _close
            //            //CLOSE = String.IsNullOrWhiteSpace(close) ?
            //            //    (decimal?)null : Convert.ToDecimal(close.Replace(".", ","))
            //        });
            //    Console.WriteLine(DateTime.Parse(item[1].ToString()).Date + "\t" + item[3].ToString() + "\t" + _close);
            //    //}
            //}
            //_context.SaveChanges();

            var tradeFromDB = FromTradeTable();
            var tradeFromConverter = _tradeConverter.ToEntity(root, tradeFromDB);
            _tradeRepository.AddRange(tradeFromConverter);
        }

        //public Trade FindLastTradeByDate(string secId)
        //{
        //    //DataContext _context = new DataContext();
        //    return _tradeRepository.FindLastDateById(secId).Result;
        //}

        //public async Task<List<Trade>> FindLastTrades(List<Security> secList)
        //{
        //    List<Trade> lastTradesInDB = new List<Trade>();

        //    foreach (var secItem in secList)
        //    {
        //        var trade = await Task.Run(() => FindLastTradeByDate(secItem.SecId));
        //        lastTradesInDB.Add(trade);
        //    }

        //    return lastTradesInDB;
        //}

        //public List<Trade> FindLastTrades()
        //{
        //    //DataContext _context = new DataContext();
        //    //return _context.Trades.ToList().GroupBy(t => t.SecId)
        //    //            .Select(g => new Trade()
        //    //            {
        //    //                SecId = g.Key,
        //    //                TradeDate = g.Select(t => t.TradeDate).LastOrDefault(),
        //    //                Close = g.Select(t => t.Close).LastOrDefault()
        //    //            }).ToList();
        //    return _tradeRepository.FindLastTrades().Result;
        //}

        //public void DeleteOldTrades(string oldDate)
        //{
        //    //DataContext _context = new DataContext();
        //    //var trades = _context.Trades.Where(t => DateTime.Compare(t.TradeDate, DateTime.Parse(oldDate)) < 0).ToList();

        //    //foreach(var trade in trades)
        //    //{
        //    //    _context.Trades.Remove(trade);
        //    //}

        //    //_context.SaveChanges();

        //    _tradeRepository.DeleteOldTrades(oldDate);
        //}
    }
}
