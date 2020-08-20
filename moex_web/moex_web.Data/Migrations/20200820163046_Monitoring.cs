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
                    SecuritySecId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_monitoring", x => x.SecId);
                    table.ForeignKey(
                        name: "FK_monitoring_security_SecuritySecId",
                        column: x => x.SecuritySecId,
                        principalTable: "security",
                        principalColumn: "SecId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_monitoring_SecuritySecId",
                table: "monitoring",
                column: "SecuritySecId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "monitoring");
        }
    }
}
