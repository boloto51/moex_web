using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace moex_web.Data.Migrations
{
    public partial class InProgress : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "inprogress",
                columns: table => new
                {
                    SecId = table.Column<string>(nullable: false),
                    BuyPrice = table.Column<decimal>(nullable: true),
                    BuyDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_inprogress", x => x.SecId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "inprogress");
        }
    }
}
