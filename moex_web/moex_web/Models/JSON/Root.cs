using System.Text.Json.Serialization;

namespace moex_web.Models.JSON
{
    public class Root
    {
        public History history { get; set; }

        [JsonPropertyName("history.cursor")]
        public HistoryCursor history_cursor { get; set; }
    }
}
