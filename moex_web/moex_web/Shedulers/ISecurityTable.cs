﻿using moex_web.Converters;
using moex_web.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moex_web.Shedulers
{
    public interface ISecurityTable
    {
        public void Fill(string url_init);
    }
}