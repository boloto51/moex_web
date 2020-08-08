﻿using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace moex_web.Data.Entities
{
    [Table("security")]
    public class Security
    {
        [Column("SecId")]
        [Key]
        public string SecId { get; set; }
        [Column("ShortName")]
        public string ShortName { get; set; }

        public virtual ICollection<Trade> Trades { get; set; }
    }
}
