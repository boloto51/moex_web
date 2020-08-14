using moex_web.Data.Entities;
using moex_web.Models.JSON;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Converters
{
    public interface ISecurityConverter
    {
        public List<Security> ToEntity(Root root, List<Security> secFromDB);
    }
}
