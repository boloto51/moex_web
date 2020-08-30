using System.ComponentModel.DataAnnotations;

namespace moex_web.Data.Entities
{
    public enum Role
    {
        [Display(Name = "Admin")]
        Admin, 
        [Display(Name = "User")]
        User
    }
}