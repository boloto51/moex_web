create table trade
(
	TradeDate date not null,
	SecId varchar(36) not null,
	Close decimal(14,4) null,
	primary key (TradeDate, SecId)
);

