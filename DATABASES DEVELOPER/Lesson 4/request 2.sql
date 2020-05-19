#select database();
#select * from book;
/*update book set author_second_name = "Ребман" 
where  id=2;
update book set author_second_name = "Ручишин" 
where  id=1;
select * from book;*/
#Select count(*)from book where author_awards is not null;
#Select min(qty_page) from book;
#Select max(qty_page) from book;
#select avg(price) from book;
#select count(*) from book where categoria is not null ;
#select min(price)from book;
#select descriptions from book where price = (select min(price) from book);
#select name_book, round(price, 4) as price from book order by name_book;
#select * from book order by date_of_publications limit 5,5;
#select * from book order by date_of_publications limit 10,6;
#select * from book where isbn like "%2325";
#select * from book where isbn like "%2%";
#select * from book where isbn like "is1_-2%";
#select * from book where price between 50 and 120;
#select * from book where price not between 200 and 600;
#delete from book where id=1;
#delete from book where name_book="Країна розваг";
#delete from book where isbn="is02-1005";


