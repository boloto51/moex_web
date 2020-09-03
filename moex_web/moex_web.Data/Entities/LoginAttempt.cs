using System;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace moex_web.Data.Entities
{
    public class LoginAttempt
    {
	    public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime LastTry { get; set; }
    }
}