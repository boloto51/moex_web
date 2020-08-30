using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace moex_web.Data.Entities
{
    [Table("inprogress")]
    public class InProgress
    {
        [Column("SecId")]
        [Key]
        public string SecId { get; set; }
        [Column("BuyPrice")]
        public decimal? BuyPrice { get; set; }
        [Column("BuyDate")]
        public DateTime BuyDate { get; set; }

        //public virtual Security Security { get; set; }
    }
}
