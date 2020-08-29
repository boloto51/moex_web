using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;

namespace moex_web.Middleware
{
    public class RequestMiddleware
    {
        private readonly RequestDelegate next;
     //   private readonly IMessagerLogger exceptionlogger;

        public RequestMiddleware(RequestDelegate next/*, IMessagerLogger exceptionlogger*/)
        {
            this.next = next;
           // this.exceptionlogger = exceptionlogger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            ForceIeNoCache(context);
            try
            {
                await next(context);
            }
            catch (UnauthorizedAccessException exception)
            {
                context.Response.StatusCode = (int) HttpStatusCode.Unauthorized;
                // exceptionlogger.Log(LogLevel.Warning,
                //     new TechnicalLogEvent(new Log
                //         {Exception = exception.StackTrace, Message = exception.Message, DateTime = DateTime.UtcNow}),
                //     exception, TechnicalLogEvent.Formatter);
            }
            catch (Exception e)
            {
                throw;
                // exceptionlogger.Log(LogLevel.Error,
                //     new TechnicalLogEvent(new Log
                //         {Exception = e.StackTrace, Message = e.Message, DateTime = DateTime.UtcNow}),
                //     e, TechnicalLogEvent.Formatter);
            }
        }

        private static void ForceIeNoCache(HttpContext context)
        {
            StringValues agent = "";
            context.Request.Headers.TryGetValue("User-Agent", out agent);
            if (!agent.ToString().Contains("MSIE") && !agent.ToString().Contains("Trident")) return;
            AddHeader(context, "Pragma", "no-cache");
            AddHeader(context, "Expires", DateTime.MinValue.ToString("R"));
            AddHeader(context, "Cache-Control", "no-store, no-cache, must-revalidate,post-check=0, pre-check=0");
        }

        private static void AddHeader(HttpContext context, string key, string value)
        {
            if (context.Response.Headers.ContainsKey(key))
                context.Response.Headers.Remove(key);
            context.Response.Headers.Add(key, value);
        }
    }
}