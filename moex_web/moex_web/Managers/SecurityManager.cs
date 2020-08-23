using moex_web.Converters;
using moex_web.Data.Repositories;
using moex_web.Models.JSON;
using moex_web.Services;
using System;
using System.Threading.Tasks;

namespace moex_web.Managers
{
    public class SecurityManager : ISecurityManager
    {
        IUriConverter _uri;
        IHttpService _httpService;
        ISecurityRepository _securityRepository;
        ISecurityConverter _securityConverter;

        public SecurityManager(IHttpService httpService, IUriConverter uri, 
            ISecurityRepository securityRepository, ISecurityConverter securityConverter)
        {
            _httpService = httpService;
            _uri = uri;
            _securityRepository = securityRepository;
            _securityConverter = securityConverter;
        }

        public async void Fill(string url_init)
        {
            var url_postfix = _uri.ConcatenateUrlStart(url_init);
            var countHundredsPages = _uri.GetCountHundredsPages(url_postfix);
            var secFromDB = await _securityRepository.Get();

            for (int i = 0; i <= countHundredsPages; i++)
            {
                var url_param = _uri.ConcatenateUrlStart(url_init, i);
                var root = _httpService.GetAsync1<Root>(url_param).Result;
                //FillSecurityTable(root);
                var secFromConverter = _securityConverter.ToEntity(root, secFromDB);
                await _securityRepository.AddRange(secFromConverter);
            }

            Console.ReadLine();
        }

        //public async void FillSecurityTable(Root root)
        //{
        //    var secFromDB = await _securityRepository.Get();
        //    var secFromConverter = _securityConverter.ToEntity(root, secFromDB);
        //    await _securityRepository.AddRange(secFromConverter);
        //}
    }
}
