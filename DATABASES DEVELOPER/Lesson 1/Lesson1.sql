create database library char set utf8;
use library;
create table book (
name_book varchar(120) not null,
descriptions text,
date_of_publications date not null default "2018-01-01",
avtor varchar(60) not null,
categoria varchar(30) not null

);
insert into book(name_book, descriptions, date_of_publications, avtor, categoria) values 
("сплячі красуні", "опис книги являється","2019-05-05","Овен Кінг", "хорор"),
("Чорний ворон", "опис книги являється","2017-04-05","Василь Шкляр", "історична"),
("Воно", "опис книги являється","2012-04-05","Стівен Кінг", "хорор"),
("Сяйво", "опис книги являється","2012-04-05","Стівен Кінг", "хорор"),
("Ловець снів", "опис книги являється","2015-04-05","Стівен Кінг", "хорор"),
("Доктор сон", "опис книги являється","2012-04-05","Стівен Кінг", "хорор"),
("Талісман", "опис книги являється","2017-04-05","Стівен Кінг", "хорор"),
("Доктор сон", "опис книги являється","2012-04-05","Стівен Кінг", "хорор"),
("Країна розваг", "опис книги являється","2015-04-05","Стівен Кінг", "хорор"),
("Мізері", "опис книги являється","2011-04-05","Стівен Кінг", "хорор");