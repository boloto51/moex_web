using System;
using moex_web.Models.JSON;
using moex_web.Services;

namespace moex_web.Converters
{
    public class UriConverter : IUriConverter
    {
        IHttpService _httpService;

        public UriConverter(IHttpService httpService)
        {
            _httpService = httpService;
        }
        public string ConcatenateUrlStart(string url, string json, string postfix, int i = 0)
        {
            return (url + json + postfix + Convert.ToString(i * 100));
        }

        public string ConcatenateUrlFrom(string url, string secId, string json, string postfix, string date)
        {
            return (url + "/" + secId + json + postfix + date);
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
