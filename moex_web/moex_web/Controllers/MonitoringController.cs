﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using moex_web.Data.Entities;
using moex_web.Data.Repositories;
using moex_web.Models;

namespace moex_web.Controllers
{
    public class MonitoringController : Controller
    {
        private readonly ISecurityRepository _securityRepository;
        private readonly ITradeRepository _tradeRepository;
        private readonly IMonitoringRepository _monitoringRepository;

        public MonitoringController(ISecurityRepository securityRepository, ITradeRepository tradeRepository,
            IMonitoringRepository monitoringRepository)
        {
            _securityRepository = securityRepository;
            _tradeRepository = tradeRepository;
            _monitoringRepository = monitoringRepository;
        }

        // GET: Monitoring
        [HttpGet]
        public async Task<ActionResult> Index()
        {
            var securities = await _securityRepository.Get();
            var trades = await _tradeRepository.Get();
            var monitorings = await _monitoringRepository.Get();

            ////var initClose = trades.Where(s => s.SecId == t.SecId
            ////        && s.TradeDate <= DateTime.Now.AddDays(-30)).OrderByDescending(s => s.TradeDate)
            ////        .Select(s => s.Close).FirstOrDefault();
            ////var currentClose = trades.Where(s => s.SecId == t.SecId
            ////        && s.TradeDate <= DateTime.Now.AddDays(-1)).OrderByDescending(s => s.TradeDate)
            ////        .Select(s => s.Close).FirstOrDefault();
            //if (monitorings != null)
            //{
            //    var models = monitorings.Select(m => new MonitoringModel
            //    {
            //        SecId = m.SecId,
            //        InitClose = m.InitClose,
            //        CurrentClose = m.CurrentClose,
            //        Percent = m.Percent
            //    });

            //    return View(models.ToList());
            //}
            //else
            //{
            //    return View(new List<MonitoringModel>());
            //}
            return View(new List<MonitoringModel>());
        }

        // GET: Monitoring/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Monitoring/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Monitoring/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Monitoring/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Monitoring/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Monitoring/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Monitoring/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}