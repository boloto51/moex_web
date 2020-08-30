using Microsoft.EntityFrameworkCore.Migrations;

namespace moex_web.Data.Migrations
{
    public partial class Users : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_inprogress",
                table: "inprogress");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "inprogress",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_inprogress",
                table: "inprogress",
                columns: new[] { "UserId", "SecId" });

            migrationBuilder.CreateTable(
                name: "user",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user", x => x.UserId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "user");

            migrationBuilder.DropPrimaryKey(
                name: "PK_inprogress",
                table: "inprogress");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "inprogress");

            migrationBuilder.AddPrimaryKey(
                name: "PK_inprogress",
                table: "inprogress",
                column: "SecId");
        }
    }
}
