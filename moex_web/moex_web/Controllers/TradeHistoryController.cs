using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using moex_web.Data.Repositories;

namespace moex_web.Controllers
{
    [Authorize]
    public class TradeHistoryController : Controller
    {
        private ITradeHistoryRepository _tradeHistoryRepository;

        public TradeHistoryController(ITradeHistoryRepository tradeHistoryRepository)
        {
            _tradeHistoryRepository = tradeHistoryRepository;
        }

        [HttpGet]
        public async Task<ActionResult> Index()
        {
            string userEmaIL = User.Identity.Name;
            var tradeHistories = await _tradeHistoryRepository.Get(userEmaIL);
            return View(tradeHistories);
        }
    }
}