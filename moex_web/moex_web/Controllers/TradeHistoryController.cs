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
        private int userId;

        public TradeHistoryController(ITradeHistoryRepository tradeHistoryRepository)
        {
            _tradeHistoryRepository = tradeHistoryRepository;
            //userId = Convert.ToInt32(User.Identity.Name != null ? User.Identity.Name : "0");
        }

        [HttpGet]
        public async Task<ActionResult> Index()
        {
            userId = Convert.ToInt32(User.Identity.Name != null ? User.Identity.Name : "0");
            var tradeHistories = await _tradeHistoryRepository.Get(userId);
            return View(tradeHistories);
        }
    }
}