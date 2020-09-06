using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using moex_web.Managers;
using moex_web.Models;

namespace moex_web.Controllers
{
    [Authorize]
    public class InProgressController : Controller
    {
        private ITradeHistoryManager _tradeHistoryManager;
        private IInProgressManager _inProgressManager;
        private int userId;

        public InProgressController(ITradeHistoryManager tradeHistoryManager, IInProgressManager inProgressManager)
        {
            _tradeHistoryManager = tradeHistoryManager;
            _inProgressManager = inProgressManager;
            //userId = Convert.ToInt32(User.Identity.Name != null ? User.Identity.Name : "0");
        }

        [HttpGet]
        public async Task<ActionResult> Index()
        {
            userId = Convert.ToInt32(User.Identity.Name != null ? User.Identity.Name : "0");
            var inProgressModel = await _inProgressManager.GetModels(userId);
            return View(inProgressModel);
        }

        [HttpPost]
        public async Task Sell([FromBody]InProgressSellModel inProgressSellModel)
        {
            userId = Convert.ToInt32(User.Identity.Name != null ? User.Identity.Name : "0");
            await _tradeHistoryManager.AddRecordToTable(userId, inProgressSellModel);
            await _inProgressManager.Delete(userId, inProgressSellModel.Id);
        }
    }
}