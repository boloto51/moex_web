using System.ComponentModel.DataAnnotations;

namespace moex_web.Models
{
    public class RegisterModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
    }
}