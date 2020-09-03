using moex_web.Data.Entities;
using moex_web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Converters
{
    public interface IInProgressConverter
    {
        public List<InProgressModel> ToListModels(List<InProgress> inProgresses, List<Security> securities,
    List<Trade> trades, int daysToSell);
    }
}
