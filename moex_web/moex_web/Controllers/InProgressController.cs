using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using moex_web.Converters;
using moex_web.Core.Config;
using moex_web.Data.Repositories;
using moex_web.Managers;
using moex_web.Models;

namespace moex_web.Controllers
{
    public class InProgressController : Controller
    {
        private readonly ISecurityRepository _securityRepository;
        private readonly ITradeRepository _tradeRepository;
        private IInProgressRepository _inProgressRepository;
        private IInProgressConverter _inProgressConverter;
        private IConfigSettings _configSettings;

        public InProgressController(ISecurityRepository securityRepository, ITradeRepository tradeRepository,
    IInProgressRepository inProgressRepository, IConfigSettings configSettings, IInProgressConverter inProgressConverter)
        {
            _securityRepository = securityRepository;
            _tradeRepository = tradeRepository;
            _inProgressRepository = inProgressRepository;
            _configSettings = configSettings;
            _inProgressConverter = inProgressConverter;
        }

        [HttpGet]
        public async Task<ActionResult> Index()
        {
            //string userName = User.Identity.Name;
            string userName = "abc";
            var securities = await _securityRepository.Get();
            var trades = await _tradeRepository.FindLastTrades();
            var inProgresses = await _inProgressRepository.Get(userName);
            var daysToSell = _configSettings.ApplicationKeys.DaysToSell;
            var inProgressModel = _inProgressConverter.ToListModels(inProgresses, securities, trades, daysToSell);
            return View(inProgressModel);
        }
    }
}