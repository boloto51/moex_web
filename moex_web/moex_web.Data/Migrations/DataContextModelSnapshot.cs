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
                    b.Property<int>("UserId")
                        .HasColumnName("UserId")
                        .HasColumnType("int");

                    b.Property<string>("SecId")
                        .HasColumnName("SecId")
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.Property<DateTime>("BuyDate")
                        .HasColumnName("BuyDate")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("BuyNumber")
                        .HasColumnName("BuyNumber")
                        .HasColumnType("int");

                    b.Property<decimal?>("BuyPrice")
                        .HasColumnName("BuyPrice")
                        .HasColumnType("decimal(65,30)");

                    b.HasKey("UserId", "SecId");

                    b.HasIndex("SecId");

                    b.ToTable("inprogress");
                });

            modelBuilder.Entity("moex_web.Data.Entities.LoginAttempt", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("LastTry")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("LoginAttempts");
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

            modelBuilder.Entity("moex_web.Data.Entities.ResetEntry", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("Expires")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Token")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("ResetEntries");
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

            modelBuilder.Entity("moex_web.Data.Entities.TradeHistory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("Id")
                        .HasColumnType("int");

                    b.Property<DateTime>("BuyDate")
                        .HasColumnName("BuyDate")
                        .HasColumnType("datetime(6)");

                    b.Property<decimal?>("BuyPrice")
                        .HasColumnName("BuyPrice")
                        .HasColumnType("decimal(65,30)");

                    b.Property<int>("Number")
                        .HasColumnName("Number")
                        .HasColumnType("int");

                    b.Property<string>("SecurityId")
                        .HasColumnName("SecurityId")
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.Property<DateTime>("SellDate")
                        .HasColumnName("SellDate")
                        .HasColumnType("datetime(6)");

                    b.Property<decimal?>("SellPrice")
                        .HasColumnName("SellPrice")
                        .HasColumnType("decimal(65,30)");

                    b.Property<int>("UserId")
                        .HasColumnName("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("SecurityId");

                    b.HasIndex("UserId");

                    b.ToTable("TradeHistory");
                });

            modelBuilder.Entity("moex_web.Data.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("Id")
                        .HasColumnType("int");

                    b.Property<DateTime>("Created")
                        .HasColumnName("Created")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Email")
                        .HasColumnName("Email")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Name")
                        .HasColumnName("Name")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Password")
                        .HasColumnName("Password")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("Role")
                        .HasColumnName("Role")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("user");
                });

            modelBuilder.Entity("moex_web.Data.Entities.InProgress", b =>
                {
                    b.HasOne("moex_web.Data.Entities.Security", "Security")
                        .WithMany()
                        .HasForeignKey("SecId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("moex_web.Data.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("moex_web.Data.Entities.ResetEntry", b =>
                {
                    b.HasOne("moex_web.Data.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("moex_web.Data.Entities.Trade", b =>
                {
                    b.HasOne("moex_web.Data.Entities.Security", "Security")
                        .WithMany("Trades")
                        .HasForeignKey("SecId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("moex_web.Data.Entities.TradeHistory", b =>
                {
                    b.HasOne("moex_web.Data.Entities.Security", "Security")
                        .WithMany()
                        .HasForeignKey("SecurityId");

                    b.HasOne("moex_web.Data.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
