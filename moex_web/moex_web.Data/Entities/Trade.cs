using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace moex_web.Data.Entities
{
    [Table("trade")]
    public class Trade
    {
        [Column("TradeDate", Order = 0)]
        [Key]
        public DateTime TradeDate { get; set; }
        [Column("SecId", Order = 1)]
        [Key]
        public string SecId { get; set; }
        [Column("Close")]
        public decimal? Close { get; set; }

        public virtual Security Security { get; set; }
    }
}
