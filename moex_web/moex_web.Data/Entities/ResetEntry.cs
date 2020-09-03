using System;

namespace moex_web.Data.Entities
{
    public class ResetEntry
    {
	    public int Id { get; set; }
        public int UserId { get; set; }
        public string Token { get; set; }
        public DateTime Expires { get; set; }

        public virtual User User { get; set; }
    }
}