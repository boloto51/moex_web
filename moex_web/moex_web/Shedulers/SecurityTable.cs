using moex_web.Converters;
using moex_web.Models.JSON;
using moex_web.Services;
using System;

namespace moex_web.Shedulers
{
    public class SecurityTable : ISecurityTable
    {
        IDataBase _dataBase;
        IUriConverter _uri;
        IHttpService _httpService;

        public SecurityTable(IDataBase dataBase, IHttpService httpService, IUriConverter uri)
        {
            _dataBase = dataBase;
            _httpService = httpService;
            _uri = uri;
        }

        public void Fill(string url_init)
        {
            string postfix_json = ".json";
            string postfix_start = "?start=";

            var url_postfix = _uri.ConcatenateUrlStart(url_init, postfix_json, postfix_start);
            var countHundredsPages = _uri.GetCountHundredsPages(url_postfix);

            for (int i = 0; i <= countHundredsPages; i++)
            {
                var url_param = _uri.ConcatenateUrlStart(url_init, postfix_json, postfix_start, i);
                var root = _httpService.GetAsync1<Root>(url_param).Result;
                _dataBase.ToSecurityTableAsync(root);
            }

            Console.ReadLine();
        }
    }
}
