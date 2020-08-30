using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using moex_web.Converters;
using moex_web.Data.Entities;
using moex_web.Data.Repositories;
using moex_web.Managers;
using moex_web.Models;

namespace moex_web.Controllers
{
    public class MonitoringController : Controller
    {
        private readonly ISecurityRepository _securityRepository;
        private readonly ITradeRepository _tradeRepository;
        private readonly IMonitoringRepository _monitoringRepository;
        private IInProgressRepository _inProgressRepository;
        private IMonitoringConverter _monitoringConverter;
        private IInProgressManager _inProgressManager;
        private IMonitoringManager _monitoringManager;

        public MonitoringController(ISecurityRepository securityRepository, ITradeRepository tradeRepository,
            IMonitoringRepository monitoringRepository, IInProgressRepository inProgressRepository, 
            IMonitoringConverter monitoringConverter, IInProgressManager inProgressManager, IMonitoringManager monitoringManager)
        {
            _securityRepository = securityRepository;
            _tradeRepository = tradeRepository;
            _monitoringRepository = monitoringRepository;
            _monitoringConverter = monitoringConverter;
            _inProgressRepository = inProgressRepository;
            _inProgressManager = inProgressManager;
            _monitoringManager = monitoringManager;
        }

        // GET: Monitoring
        [HttpGet]
        public async Task<ActionResult> Index()
        {
            //var securities = await _securityRepository.Get();
            //var trades = await _tradeRepository.Get();
            var monitorings = await _monitoringRepository.Get();
            var securities = await _securityRepository.Get();
            var monitoringModels = _monitoringConverter.ToListModels(monitorings, securities);

            return View(monitoringModels);
        }

        [HttpPost]
        public async Task Index([FromBody]MonitoringBuyModel monitoringBuyModel)
        {
            await _monitoringManager.DeleteRecord(monitoringBuyModel.SecId);
            await _inProgressManager.UpdateTable(monitoringBuyModel);
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