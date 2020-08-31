using moex_web.Data.Entities;
using moex_web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Converters
{
    public class InProgressConverter : IInProgressConverter
    {
        public List<InProgressModel> ToListModels(List<InProgress> inProgresses, List<Security> securities, 
            List<Trade> trades, int daysToSell)
        {
            var inProgressModel = new List<InProgressModel>();

            foreach (var inProgress in inProgresses)
            {
                inProgressModel.Add(new InProgressModel
                {
                    SecId = inProgress.SecId,
                    SecName = securities.Find(s => s.SecId == inProgress.SecId).ShortName,
                    BuyPrice = inProgress.BuyPrice,
                    CurrentClose = trades.Find(t => t.SecId == inProgress.SecId).Close,
                    BuyDate = inProgress.BuyDate,
                    DaysToSell = daysToSell - (DateTime.Now - inProgress.BuyDate).Days
                });
            }

            return inProgressModel;
        }

    }
}
