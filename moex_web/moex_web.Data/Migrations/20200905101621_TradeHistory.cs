﻿using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace moex_web.Data.Migrations
{
    public partial class TradeHistory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LotCount",
                table: "inprogress",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "TradeHistory",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    SecurityId = table.Column<string>(nullable: true),
                    LotCount = table.Column<int>(nullable: false),
                    BuyPrice = table.Column<decimal>(nullable: true),
                    BuyDate = table.Column<DateTime>(nullable: false),
                    SellPrice = table.Column<decimal>(nullable: true),
                    SellDate = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TradeHistory", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TradeHistory_security_SecurityId",
                        column: x => x.SecurityId,
                        principalTable: "security",
                        principalColumn: "SecId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_TradeHistory_user_UserId",
                        column: x => x.UserId,
                        principalTable: "user",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TradeHistory_SecurityId",
                table: "TradeHistory",
                column: "SecurityId");

            migrationBuilder.CreateIndex(
                name: "IX_TradeHistory_UserId",
                table: "TradeHistory",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TradeHistory");

            migrationBuilder.DropColumn(
                name: "LotCount",
                table: "inprogress");
        }
    }
}