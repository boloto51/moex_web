using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace moex_web.Data.Entities
{
    [Table("TradeHistory")]
    public class TradeHistory
    {
        [Column("Id")]
        [Key]
        public int Id { get; set; }
        [Column("SecId")]
        public string SecId { get; set; }
        [Column("Number")]
        public int Number { get; set; }
        [Column("BuyPrice")]
        public decimal? BuyPrice { get; set; }
        [Column("BuyDate")]
        public DateTime BuyDate { get; set; }
        [Column("SellPrice")]
        public decimal? SellPrice { get; set; }
        [Column("SellDate")]
        public DateTime SellDate { get; set; }
        [Column("UserId")]
        public int UserId { get; set; }

        public virtual Security Security { get; set; }
        public virtual User User { get; set; }
    }
}
