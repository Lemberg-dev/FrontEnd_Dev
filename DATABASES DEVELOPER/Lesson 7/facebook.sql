drop database if exists facebook_clone ;
create database facebook_clone;
use facebook_clone;

create table user(
id int not null primary key auto_increment,
username varchar(50)not null,
created_at TIMESTAMP DEFAULT NOW()
);

create table alboms(
id int not null primary key auto_increment,
albom_name varchar(55) not null,
created_at TIMESTAMP DEFAULT NOW(),
user_id int not null
);

create table photos(
id int not null primary key auto_increment,
image_url varchar(55) not null,
created_at TIMESTAMP DEFAULT NOW(),
alboms_id int not null,
user_id int not null
);

create table messages(
id int not null primary key auto_increment,
massages_text text not null ,
created_at TIMESTAMP DEFAULT NOW(),
user_id int not null
);

create table comments (
id int not null primary key auto_increment,
comment_text text not null,
created_at TIMESTAMP DEFAULT NOW(),
photos_id int not null,
user_id int not null
);

create table likes(
id int not null primary key auto_increment,
photo_id int not null ,
user_id int not null
);

create table friends(
id int not null primary key auto_increment,
usernames varchar (55) not null unique,
user_id int not null,
likes_id int not null,
messages_id int not null,
comments_id int not null,
created_at TIMESTAMP DEFAULT NOW()
);

create index idx_username on user(username);
create index idx_usernames on friends(usernames);
create index idx_created_at on photos(created_at);

alter table alboms add foreign key (user_id) references user(id);
alter table photos add foreign key (user_id) references user(id);
alter table photos add foreign key (alboms_id) references alboms(id);
alter table messages add foreign key (user_id) references user(id);
alter table comments add foreign key (photos_id) references photos(id);
alter table comments add foreign key(user_id) references user(id);
alter table likes add foreign key(user_id) references user(id);
alter table friends add foreign key(user_id) references user(id);
alter table friends add foreign key(likes_id) references likes(id);
alter table friends add foreign key(messages_id) references messages(id);
alter table friends add foreign key(comments_id) references comments(id);
