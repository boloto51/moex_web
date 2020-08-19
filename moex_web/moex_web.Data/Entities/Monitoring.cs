using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace moex_web.Data.Entities
{
    [Table("monitoring")]
    public class Monitoring
    {
        [Column("SecId")]
        [Key]
        public string SecId { get; set; }
        [Column("InitClose")]
        public decimal? InitClose { get; set; }
        [Column("CurrentClose")]
        public decimal? CurrentClose { get; set; }
        [Column("Percent")]
        public decimal? Percent { get; set; }

        //public virtual Security Security { get; set; }
        //public virtual Trade Trade { get; set; }
        //public virtual ICollection<Trade> Trades { get; set; }
    }
}
