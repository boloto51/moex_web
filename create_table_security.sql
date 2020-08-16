create table security
(
	SecId varchar(36) not null,
	ShortName varchar(189) not null,
	constraint table_name_SECID_uindex
		unique (SecId)
);

alter table security
	add primary key (SecId);

