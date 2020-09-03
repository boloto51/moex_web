using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace moex_web.Data.Entities
{
    [Table("user")]

    public class User
    {
        [Column("Id")]
        [Key]
        public int Id { get; set; }
        [Column("Name")]
        public string Name { get; set; }
        [Column("Email")]
        public string Email { get; set; }
        [Column("Password")]
        public string Password { get; set; }
        [Column("Created")]
        public DateTime Created { get; set; }
        [Column("Role")]
        public Role Role { get; set; }

        //public virtual ICollection<InProgress> InProgresses { get; set; }
    }
}
