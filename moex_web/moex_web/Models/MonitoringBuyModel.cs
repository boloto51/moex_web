using System;
using System.Text.Json.Serialization;

namespace moex_web.Models
{
    public class MonitoringBuyModel
    {
        [JsonPropertyName("Id")]
        public string Id { get; set; }
        [JsonPropertyName("Price")]

        public decimal Price { get; set; }
        [JsonPropertyName("Number")]

        public int Number { get; set; }

        [JsonPropertyName("Date")]

        public DateTime Date { get; set; }
        //public string UserId { get; set; }
    }
}
