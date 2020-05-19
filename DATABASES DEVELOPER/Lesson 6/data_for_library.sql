use library;

insert into genre_books(name) values 
("comedy"),
("horror"),
("drama"),
("biography")
;

insert into book (name,descriptions,price,isbn,genre_books_id) values 
("Vono","some description for the book","20.50","pr12-22215112",1),
("Black smoke","some description for the book","22.30","pr13-21321122",2),
("Doctor Slip","some description for the book","23.10","pr10-21182312",1)
;

insert into author (first_name,second_name,email,addres,birthday) values 
("Stiven","King","stivn@gmail.com","London","2012-02-21"),
("Oven","King","ove1n@gmail.com","Liverpool","2018-03-18"),
("Michel","Hallen","mh2@gmail.com","Lviv","2020-04-09"),
("Oleh","Kulchytskiy","oleh2@gmail.com","Lemberg","2020-04-09")
;