using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace moex_web.Data.Migrations
{
    public partial class ChangeDateColumnInMonitoring : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RemoveDate",
                table: "monitoring");

            migrationBuilder.DropColumn(
                name: "Percent",
                table: "monitoring");

            migrationBuilder.AddColumn<DateTime>(
                name: "ToBuyDate",
                table: "monitoring",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ToBuyDate",
                table: "monitoring");

            migrationBuilder.AddColumn<DateTime>(
                name: "RemoveDate",
                table: "monitoring",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<decimal>(
                name: "Percent",
                table: "monitoring",
                type: "decimal(65,30)",
                nullable: true);
        }
    }
}
