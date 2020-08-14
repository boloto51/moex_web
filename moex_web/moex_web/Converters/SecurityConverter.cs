using moex_web.Data.Entities;
using moex_web.Models.JSON;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Converters
{
    public class SecurityConverter : ISecurityConverter
    {
        public List<Security> ToEntity(Root root, List<Security> secFromDB)
        {
            var secFromConverter = new List<Security>();

            foreach (var item in root.history.data)
            {
                Console.WriteLine("SECID: {0}\tSHORTNAME: {1}", item[3], item[2]);

                if (secFromDB.Where(a => a.SecId == item[3].ToString())
                    .Select(a => a.SecId).FirstOrDefault() == null)
                {
                    secFromConverter.Add(new Security
                    {
                        SecId = item[3].ToString(),
                        ShortName = item[2].ToString()
                    });
                }
            }

            return secFromConverter;
        }
    }
}
