using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace moex_web.Data.Migrations
{
    public partial class Monitoring : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Close",
                table: "trade",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(14,4)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "SecId",
                table: "trade",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(36) CHARACTER SET utf8mb4");

            migrationBuilder.AlterColumn<DateTime>(
                name: "TradeDate",
                table: "trade",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime");

            migrationBuilder.AlterColumn<string>(
                name: "ShortName",
                table: "security",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(189) CHARACTER SET utf8mb4",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "SecId",
                table: "security",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(36) CHARACTER SET utf8mb4");

            migrationBuilder.CreateTable(
                name: "monitoring",
                columns: table => new
                {
                    SecId = table.Column<string>(nullable: false),
                    InitClose = table.Column<decimal>(nullable: true),
                    CurrentClose = table.Column<decimal>(nullable: true),
                    Percent = table.Column<decimal>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_monitoring", x => x.SecId);
                    table.ForeignKey(
                        name: "FK_monitoring_security_SecId",
                        column: x => x.SecId,
                        principalTable: "security",
                        principalColumn: "SecId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_monitoring_SecId",
                table: "monitoring",
                column: "SecId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "monitoring");

            migrationBuilder.AlterColumn<decimal>(
                name: "Close",
                table: "trade",
                type: "decimal(14,4)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "SecId",
                table: "trade",
                type: "varchar(36) CHARACTER SET utf8mb4",
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<DateTime>(
                name: "TradeDate",
                table: "trade",
                type: "datetime",
                nullable: false,
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<string>(
                name: "ShortName",
                table: "security",
                type: "varchar(189) CHARACTER SET utf8mb4",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "SecId",
                table: "security",
                type: "varchar(36) CHARACTER SET utf8mb4",
                nullable: false,
                oldClrType: typeof(string));
        }
    }
}
