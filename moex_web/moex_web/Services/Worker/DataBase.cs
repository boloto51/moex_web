﻿using System;
using moex_web.Data.DbContext;
using moex_web.Models.JSON;
using moex_web.Data.Entities;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace moex_web.Services.Worker
{
    public class DataBase
    {
        private DataContext _context;

        public DataBase(DataContext context)
        {
            _context = context;
        }

        public List<Security> FromSecurityTable()
        {
            //DataContext context = new DataContext();
            return _context.Securities.Select(a => a).ToList();
        }

        public int FromSecurityTableCount()
        {
            //DataContext context = new DataContext();
            return _context.Securities.Count();
        }

        public int FromTradeTableCount()
        {
            //DataContext context = new DataContext();
            return _context.Trades.Count();
        }

        public async void ToSecurityTableAsync(Root root)
        {
            await Task.Run(() => ToSecurityTable(root));
        }

        public void ToSecurityTable(Root root)
        {
            //DataContext _context = new DataContext();

            foreach (var item in root.history.data)
            {
                Console.WriteLine("SECID: {0}\tSHORTNAME: {1}", item[3], item[2]);

                if (_context.Securities.Where(a => a.SecId == item[3].ToString())
                    .Select(a => a.SecId).FirstOrDefault() == null)
                {
                    _context.Securities.Add(new Security
                    {
                        SecId = item[3].ToString(),
                        ShortName = item[2].ToString()
                    });
                }
            }
            _context.SaveChanges();
        }

        public async void ToTradeTableAsync(Root root, string url_init, string secId, string postfix_json, string postfix_from, string date)
        {
            await Task.Run(() => ToTradeTable(root, url_init, secId, postfix_json, postfix_from, date));
        }

        public void ToTradeTable(Root root, string url_init, string secId, string postfix_json, string postfix_from, string date)
        {
            //DataContext _context = new DataContext();

            foreach (var item in root.history.data)
            {
                //var tradeDateFromUrl = item[1].ToString();
                //var secIdFromUrl = item[3].ToString();

                //var tradeDateFromDB = _context.Trades.Where(t => t.SECID == secIdFromUrl &&
                //    t.TRADEDATE.ToString() == tradeDateFromUrl)
                //    .Select(t => t.TRADEDATE).FirstOrDefault().ToString();

                //if (!String.IsNullOrWhiteSpace(item.ToString()) && String.IsNullOrEmpty(tradeDateFromDB))
                //{
                    var close = item[11] == null ? null : item[11].ToString();
                    var _close = String.IsNullOrWhiteSpace(close) ? (decimal?)null : Convert.ToDecimal(close.Replace(".", ","));

                    _context.Trades.Add(new Trade
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
            _context.SaveChanges();
        }

        public Trade FindLastDate(string secId)
        {
            //DataContext _context = new DataContext();
            return _context.Trades.Where(t => t.SecId == secId).OrderBy(t => t.TradeDate).Last();
        }

        public async Task<List<Trade>> FindLastTrades(List<Security> secList)
        {
            List<Trade> lastTradesInDB = new List<Trade>();

            foreach (var secItem in secList)
            {
                var trade = await Task.Run(() => FindLastDate(secItem.SecId));
                lastTradesInDB.Add(trade);
            }

            return lastTradesInDB;
        }

        public List<Trade> FindLastTrades()
        {
            //DataContext _context = new DataContext();
            return _context.Trades.ToList().GroupBy(t => t.SecId)
                        .Select(g => new Trade()
                        {
                            SecId = g.Key,
                            TradeDate = g.Select(t => t.TradeDate).LastOrDefault(),
                            Close = g.Select(t => t.Close).LastOrDefault()
                        }).ToList();
        }

        public void DeleteOldTrades(string oldDate)
        {
            //DataContext _context = new DataContext();
            var trades = _context.Trades.Where(t => DateTime.Compare(t.TradeDate, DateTime.Parse(oldDate)) < 0).ToList();
            
            foreach(var trade in trades)
            {
                _context.Trades.Remove(trade);
            }

            _context.SaveChanges();
        }
    }
}
