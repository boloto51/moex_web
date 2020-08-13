using System.Collections.Generic;

namespace moex_web.Models.JSON
{
    public class History
    {
        public Metadata metadata { get; set; }
        public List<string> columns { get; set; }
        public List<List<object>> data { get; set; }
    }
}
