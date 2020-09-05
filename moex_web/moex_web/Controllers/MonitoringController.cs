using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using moex_web.Converters;
using moex_web.Data.Entities;
using moex_web.Data.Repositories;
using moex_web.Managers;
using moex_web.Models;

namespace moex_web.Controllers
{
    [Authorize]
    public class MonitoringController : Controller
    {
        private readonly ISecurityRepository _securityRepository;
        private readonly IMonitoringRepository _monitoringRepository;
        private IInProgressRepository _inProgressRepository;
        private IMonitoringConverter _monitoringConverter;
        private IInProgressManager _inProgressManager;

        public MonitoringController(ISecurityRepository securityRepository, 
            IMonitoringRepository monitoringRepository, IInProgressRepository inProgressRepository, 
            IMonitoringConverter monitoringConverter, IInProgressManager inProgressManager)
        {
            _securityRepository = securityRepository;
            _monitoringRepository = monitoringRepository;
            _monitoringConverter = monitoringConverter;
            _inProgressRepository = inProgressRepository;
            _inProgressManager = inProgressManager;
        }

        // GET: Monitoring
        [HttpGet]
        public async Task<ActionResult> Index()
        {
            string userEmaIL = User.Identity.Name;
            var inProgress = await _inProgressRepository.GetUserSecurityIds(userEmaIL);
            var monitorings = await _monitoringRepository.Get(inProgress);
            var securities = await _securityRepository.Get();            
            var monitoringModels = _monitoringConverter.ToListModels(monitorings, securities);

            return View(monitoringModels);
        }

        [HttpPost]
        public async Task Index([FromBody]MonitoringBuyModel monitoringBuyModel)
        {
            string userEmaIL = User.Identity.Name;
            await _inProgressManager.UpdateTable(userEmaIL, monitoringBuyModel);
        }
    }
}