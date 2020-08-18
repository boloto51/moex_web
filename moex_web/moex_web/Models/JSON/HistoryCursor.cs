using System.Collections.Generic;

namespace moex_web.Models.JSON
{
    public class HistoryCursor
    {
        //public Metadata2 metadata { get; set; }
        //public List<string> columns { get; set; }
        public List<List<int>> data { get; set; }
    }
}
