drop database if exists Magazin;
create database magazin;
use magazin;

create table viddil (
id int not null primary key auto_increment,
name varchar(30) not null,
tovar_id int not null
);

create table tovar(
id int not null primary key auto_increment,
name varchar(50) not null,
prodavets_id int not null
);

create table sklad(
id int not null primary key auto_increment,
name varchar (50) not null,
tovar_id int not null,
viddil_id int not null
);

create table prodavets(
id int not null primary key auto_increment,
first_name varchar (30) not null,
second_name varchar (50)not null
);

create table kassa(
id int not null primary key auto_increment,
name varchar(20) not null,
prodavets_id int not null,
pokupets_id int not null
);

create table kamera_shovu(
id int not null primary key auto_increment,
name varchar(30) not null,
pokupets_id int not null
);


create table pokupets(
id int not null primary key auto_increment,
first_name varchar(30) not null,
second_name varchar(50) not null
);

alter table viddil add foreign  key (tovar_id)
references tovar(id);
alter table sklad add foreign  key (viddil_id)
references viddil(id);
alter table sklad add foreign  key (tovar_id)
references tovar(id);
alter table tovar add foreign  key (prodavets_id)
references prodavets(id);
alter table kassa add foreign  key (prodavets_id)
references prodavets(id);
alter table kamera_shovu add foreign  key (pokupets_id)
references pokupets(id);
alter table kassa add foreign  key (pokupets_id)
references pokupets(id);