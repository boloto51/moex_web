﻿namespace moex_web.Core.RemoteAgents
{
    public interface IMailAgent
    {
        string SendMail(string mailto, string caption, string message, string attachFile = null);
    }
}