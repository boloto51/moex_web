using System;
using moex_web.Data.DbContext;
using moex_web.Models.JSON;
using moex_web.Data.Entities;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using moex_web.Data.Repositories;
using moex_web.Converters;

namespace moex_web.Shedulers
{
    public class DataBase : IDataBase
    {
        ISecurityRepository _securityRepository;
        ITradeRepository _tradeRepository;
        ISecurityConverter _securityConverter;
        ITradeConverter _tradeConverter;

        public DataBase(ISecurityRepository securityRepository, ITradeRepository tradeRepository,
            ISecurityConverter securityConverter, ITradeConverter tradeConverter)
        {
            _securityRepository = securityRepository;
            _tradeRepository = tradeRepository;
            _securityConverter = securityConverter;
            _tradeConverter = tradeConverter;
        }

        public async void ToSecurityTable(Root root)
        {
            var secFromDB = await _securityRepository.Get(); //FromSecurityTable();
            var secFromConverter = _securityConverter.ToEntity(root, secFromDB);
            await _securityRepository.AddRange(secFromConverter);
        }

        public async void ToTradeTable(Root root)
        {
            var tradeFromDB = await _tradeRepository.Get(); // FromTradeTable();
            var tradeFromConverter = _tradeConverter.ToEntity(root, tradeFromDB);
            await _tradeRepository.AddRange(tradeFromConverter);
        }
    }
}
