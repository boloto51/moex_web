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

        public InProgressController(ITradeHistoryManager tradeHistoryManager, IInProgressManager inProgressManager)
        {
            _tradeHistoryManager = tradeHistoryManager;
            _inProgressManager = inProgressManager;
        }

        [HttpGet]
        public async Task<ActionResult> Index()
        {
            string userEmail = User.Identity.Name;
            var inProgressModel = await _inProgressManager.GetModels(userEmail);
            return View(inProgressModel);
        }

        [HttpPost]
        public async Task Sell([FromBody]InProgressSellModel inProgressSellModel)
        {
            string userEmaIL = User.Identity.Name;
            await _tradeHistoryManager.UpdateTable(userEmaIL, inProgressSellModel);
            await _inProgressManager.Delete(userEmaIL, inProgressSellModel.Id);
        }
    }
}