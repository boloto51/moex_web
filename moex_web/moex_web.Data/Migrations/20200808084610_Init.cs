using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace moex_web.Data.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "security",
                columns: table => new
                {
                    SecId = table.Column<string>(nullable: false),
                    ShortName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_security", x => x.SecId);
                });

            migrationBuilder.CreateTable(
                name: "trade",
                columns: table => new
                {
                    TradeDate = table.Column<DateTime>(nullable: false),
                    SecId = table.Column<string>(nullable: false),
                    Close = table.Column<decimal>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_trade", x => new { x.TradeDate, x.SecId });
                    table.ForeignKey(
                        name: "FK_trade_security_SecId",
                        column: x => x.SecId,
                        principalTable: "security",
                        principalColumn: "SecId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_trade_SecId",
                table: "trade",
                column: "SecId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "trade");

            migrationBuilder.DropTable(
                name: "security");
        }
    }
}
