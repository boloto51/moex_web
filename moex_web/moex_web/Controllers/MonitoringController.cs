using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using moex_web.Data.Repositories;
using moex_web.Models;

namespace moex_web.Controllers
{
    public class MonitoringController : Controller
    {
        private readonly ISecurityRepository _securityRepository;
        private readonly ITradeRepository _tradeRepository;

        public MonitoringController(ISecurityRepository securityRepository, ITradeRepository tradeRepository)
        {
            _securityRepository = securityRepository;
            _tradeRepository = tradeRepository;
        }

        // GET: Monitoring
        [HttpGet]
        public async Task<ActionResult> Index()
        {
            var securities = await _securityRepository.Get();
            var trades = await _tradeRepository.Get();



            var models = trades.Select(t => new MonitoringModel
            {
                SecId = t.SecId,
                ShortName = securities.Where(s => s.SecId == t.SecId).Select(s => s.ShortName).FirstOrDefault(),
                TradeDate = t.TradeDate.Date,
                Close = t.Close
            });

            return View(models.ToList());
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