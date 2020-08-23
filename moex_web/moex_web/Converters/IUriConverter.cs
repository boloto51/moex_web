using moex_web.Models.JSON;
using System;

namespace moex_web.Converters
{
    public interface IUriConverter
    {
        public string ConcatenateUrlStart(string url, int i = 0);
        //public string ConcatenateUrlFrom(string url, string secId, string date);
        public int GetCountHundredsPages(string url);
        //public int GetPageLastDataCount(Root root);
        //public DateTime GetPageLastData(Root root, int count);
    }
}
