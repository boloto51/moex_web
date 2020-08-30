﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using moex_web.Data.DbContext;

namespace moex_web.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("moex_web.Data.Entities.InProgress", b =>
                {
                    b.Property<string>("SecId")
                        .HasColumnName("SecId")
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.Property<DateTime>("BuyDate")
                        .HasColumnName("BuyDate")
                        .HasColumnType("datetime(6)");

                    b.Property<decimal?>("BuyPrice")
                        .HasColumnName("BuyPrice")
                        .HasColumnType("decimal(65,30)");

                    b.HasKey("SecId");

                    b.ToTable("inprogress");
                });

            modelBuilder.Entity("moex_web.Data.Entities.Monitoring", b =>
                {
                    b.Property<string>("SecId")
                        .HasColumnName("SecId")
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.Property<decimal?>("CurrentClose")
                        .HasColumnName("CurrentClose")
                        .HasColumnType("decimal(65,30)");

                    b.Property<decimal?>("InitClose")
                        .HasColumnName("InitClose")
                        .HasColumnType("decimal(65,30)");

                    b.Property<DateTime>("ToBuyDate")
                        .HasColumnName("ToBuyDate")
                        .HasColumnType("datetime(6)");

                    b.HasKey("SecId");

                    b.ToTable("monitoring");
                });

            modelBuilder.Entity("moex_web.Data.Entities.Security", b =>
                {
                    b.Property<string>("SecId")
                        .HasColumnName("SecId")
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.Property<string>("ShortName")
                        .HasColumnName("ShortName")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("SecId");

                    b.ToTable("security");
                });

            modelBuilder.Entity("moex_web.Data.Entities.Trade", b =>
                {
                    b.Property<DateTime>("TradeDate")
                        .HasColumnName("TradeDate")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("SecId")
                        .HasColumnName("SecId")
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.Property<decimal?>("Close")
                        .HasColumnName("Close")
                        .HasColumnType("decimal(65,30)");

                    b.HasKey("TradeDate", "SecId");

                    b.HasIndex("SecId");

                    b.ToTable("trade");
                });

            modelBuilder.Entity("moex_web.Data.Entities.Trade", b =>
                {
                    b.HasOne("moex_web.Data.Entities.Security", "Security")
                        .WithMany("Trades")
                        .HasForeignKey("SecId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
