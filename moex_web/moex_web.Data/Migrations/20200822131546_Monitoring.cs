using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace moex_web.Data.Migrations
{
    public partial class Monitoring : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "monitoring",
                columns: table => new
                {
                    SecId = table.Column<string>(nullable: false),
                    InitClose = table.Column<decimal>(nullable: true),
                    CurrentClose = table.Column<decimal>(nullable: true),
                    Percent = table.Column<decimal>(nullable: true),
                    RemoveDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_monitoring", x => x.SecId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "monitoring");
        }
    }
}
