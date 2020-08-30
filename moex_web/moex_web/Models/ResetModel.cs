using System.ComponentModel.DataAnnotations;

namespace moex_web.Models
{
    public class ResetModel
    {
        public string Password { get; set; }
        public string Token { get; set; }
    }
}