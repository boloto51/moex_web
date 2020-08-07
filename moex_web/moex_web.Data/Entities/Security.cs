using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace moex_web.Data.Entities
{
    [Table("security")]
    public class Security
    {
        [Column("SECID")]
        [Key]
        public string SECID { get; set; }
        [Column("SHORTNAME")]
        public string SHORTNAME { get; set; }

        public virtual ICollection<Trade> Trades { get; set; }
    }
}
