using System;
using moex_web.Models.JSON;
using moex_web.Services;

namespace moex_web.Converters
{
    public class UriConverter : IUriConverter
    {
        IHttpService _httpService;
        const int numberLinesOnPage = 100;

        public UriConverter(IHttpService httpService)
        {
            _httpService = httpService;
        }
        public string ConcatenateUrlStart(string url, int i = 0)
        {
            string json = ".json";
            string start = "?start=";
            return (url + json + start + Convert.ToString(i * numberLinesOnPage));
        }

        public string ConcatenateUrlFrom(string url, string secId, string date)
        {
            string json = ".json";
            string from = "?from=";
            return (url + "/" + secId + json + from + date);
        }

        public int GetCountHundredsPages(string url)
        {
            Root root = _httpService.GetAsync1<Root>(url).Result;
            return (int)Math.Truncate(Convert.ToDecimal(root.history_cursor.data[0][1] / 100));
        }

        public int GetPageLastDataCount(Root root)
        {
            return root.history.data.Count;
        }

        public DateTime GetPageLastData(Root root, int count)
        {
            return DateTime.Parse(root.history.data[count - 1][1].ToString());
        }
    }
}
