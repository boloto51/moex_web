create table trade
(
    TradeDate date           not null,
    SecId     varchar(36)    not null,
    Close     decimal(14, 4) null,
    primary key (TradeDate, SecId)
);

INSERT INTO moex_webdb.trade (TradeDate, SecId, Close) VALUES ('2017-07-09', 'a', 123.2003);