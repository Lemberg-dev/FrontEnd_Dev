drop database if exists library;
create database library;
use  library;
create table book (
id int not null primary key auto_increment,
name varchar(50) not null,
descriptions text,
price decimal (7,4) not null,
isbn varchar(20) not null unique,
genre_books_id int not null,
author_id int not null
);

create table genre_books(
id int not null primary key auto_increment,
name varchar (30) not null
);

create table author(
id int not null primary key auto_increment,
first_name varchar(30) not null,
second_name varchar(50) not null,
email varchar (50) not null unique,
addres varchar (70) not null ,
birthday date not null
);

create table author_book(
autor_id int not null,
book_id int not null
);
alter table book add foreign key (genre_books_id)
references genre_books(id);
alter table book add foreign key (author_id)
references author(id);

alter table author_book add foreign key (autor_id) references author(id);
alter table author_book add foreign key (book_id) references book(id);