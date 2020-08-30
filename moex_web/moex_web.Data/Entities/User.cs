using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace moex_web.Data.Entities
{
    [Table("user")]

    public class User
    {
        [Column("UserId")]
        [Key]
        public string UserId { get; set; }
        [Column("Password")]
        public string Password { get; set; }
    }
}
