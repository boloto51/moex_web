using System;
using System.Text.Json.Serialization;

namespace moex_web.Models
{
    public class InProgressSellModel
    {
        [JsonPropertyName("Id")]
        public string Id { get; set; }
        [JsonPropertyName("Price")]

        public decimal Price { get; set; }
        [JsonPropertyName("Number")]

        public decimal Number { get; set; }

        [JsonPropertyName("Date")]

        public DateTime Date { get; set; }

    }
}
