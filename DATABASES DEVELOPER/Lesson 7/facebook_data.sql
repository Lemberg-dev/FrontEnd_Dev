use facebook_clone;

insert into user (username, created_at, is_deleted) values 
('Kenton_Kirlin', '2017-02-16 18:22:10.846',false), 
('Andre_Purdy85', '2017-04-02 17:11:21.417',false), 
('Harley_Lind18', '2017-02-21 11:12:32.574',false),
 ('Arely_Bogan63', '2016-08-13 01:28:43.085',false), 
 ('Aniya_Hackett', '2016-12-07 01:04:39.298',false), 
 ('Travon.Waters', '2017-04-30 13:26:14.496',false), 
 ('Kasandra_Homenick', '2016-12-12 06:50:07.996',false), 
 ('Tabitha_Schamberger11', '2016-08-20 02:19:45.512',false),
 ('Gus93', '2016-06-24 19:36:30.978',false), 
 ('Presley_McClure', '2016-08-07 16:25:48.561',false), 
 ('Justina.Gaylord27', '2017-05-04 16:32:15.577',false), 
 ('Dereck65', '2017-01-19 01:34:14.296',false),
 ('Alexandro35', '2017-03-29 17:09:02.344',false), 
 ('Jaclyn81', '2017-02-06 23:29:16.394',false), 
 ('Billy52', '2016-10-05 14:10:20.453',false);
 
 insert into alboms (albom_name, created_at , user_id) values
 ('summer','2016-10-05 14:10:20.453',2),
 ('fly','2017-02-06 23:29:16.394',1),
 ('tenis','2017-03-29 17:09:02.344',3),
 ('play','2017-01-19 01:34:14.296',5),
 ('socer','2016-08-07 16:25:48.561',4),
 ('rock','2016-06-24 19:36:30.978',7),
 ('church','2016-12-12 06:50:07.996',6),
 ('beach','2016-05-12 06:50:07.996',9),
 ('moutaine','2020-12-12 06:50:07.996',8),
 ('dream','2010-12-05 06:50:07.996',11),
 ('loft','2008-12-05 06:50:07.996',10),
 ('rom','2018-05-05 06:50:07.996',13),
 ('disco','2005-12-22 06:50:07.996',12),
 ('holeyday','2015-10-05 06:50:07.996',14),
 ('river','2010-12-05 06:50:07.996',15);
 
 insert into photos(image_url, user_id, alboms_id) values 
 ('http://elijah.biz', 1,2),
 ('https://shanon.org', 1,12), 
 ('http://vicky.biz', 1,1), 
 ('http://oleta.net', 1,3), 
 ('https://jennings.biz', 1,3), 
 ('https://quinn.biz', 2,3),
 ('https://selina.name', 2,4), 
 ('http://malvina.org', 2,4), 
 ('https://branson.biz', 2,6), 
 ('https://elenor.name', 3,5), 
 ('https://marcelino.com', 3,6), 
 ('http://felicity.name', 3,7), 
 ('https://fred.com', 3,8), 
 ('https://gerhard.biz', 4,9), 
 ('https://sherwood.net', 4,14);
 
 insert into messages(massages_text, created_at, user_id) values
 ('some specific text','2001-12-04 06:50:07.996',1),
 ('some specific text','2007-12-03 06:50:07.996',2),
 ('some specific text','2003-12-02 06:50:07.996',3),
 ('some specific text','2005-12-01 06:50:07.996',4),
 ('some specific text','2000-10-05 06:50:07.996',5),
 ('some specific text','2006-09-05 06:50:07.996',6),
 ('some specific text','2010-08-05 06:50:07.996',7),
 ('some specific text','2008-07-05 06:50:07.996',8),
 ('some specific text','2011-06-05 06:50:07.996',9),
 ('some specific text','2013-05-05 06:50:07.996',10),
 ('some specific text','2010-04-05 06:50:07.996',11),
 ('some specific text','2010-03-05 06:50:07.996',12),
 ('some specific text','2016-02-05 06:50:07.996',13),
 ('some specific text','2020-01-05 06:50:07.996',14),
 ('some specific text','2018-12-05 06:50:07.996',15)
 ;
 
 insert into comments(comment_text,created_at,photos_id,user_id) values
 ('some specific text','2018-12-07 06:50:07.996',1,1),
 ('some specific text','2002-12-08 06:50:07.996',2,2),
 ('some specific text','2003-12-12 06:50:07.996',3,3),
 ('some specific text','2004-12-11 06:50:07.996',4,4),
 ('some specific text','2005-12-10 06:50:07.996',5,5),
 ('some specific text','2006-01-05 06:50:07.996',6,6),
 ('some specific text','2007-02-05 06:50:07.996',7,7),
 ('some specific text','2008-03-05 06:50:07.996',8,8),
 ('some specific text','2009-04-05 06:50:07.996',9,9),
 ('some specific text','2010-05-05 06:50:07.996',10,10),
 ('some specific text','2011-06-05 06:50:07.996',11,11),
 ('some specific text','2012-07-05 06:50:07.996',12,12),
 ('some specific text','2013-08-05 06:50:07.996',13,13),
 ('some specific text','2014-09-05 06:50:07.996',14,14),
 ('some specific text','2015-10-05 06:50:07.996',15,15)
 ;
 
 insert into likes (photo_id,user_id) values
 (2, 1), 
 (5, 1),
 (9, 1),
 (10, 1), 
 (11, 1),
 (14, 1),
 (19, 1),
 (21, 1), 
 (24, 1),
 (35, 1),
 (36, 1),
 (41, 1), 
 (46, 1),
 (47, 1),
 (44,5)
 ;
 
 insert into friends(usernames,user_id,likes_id,messages_id,comments_id,created_at) values
 ('dima',1,2,3,1,'2016-12-12 06:50:07.996'),
 ('misha',2,1,1,3,'2012-12-12 06:50:07.996'),
 ('katya',4,5,6,7,'2014-12-12 06:50:07.996'),
 ('oleh',9,9,9,9,'2020-05-05 06:50:07.996'),
 ('taras',6,7,2,5,'2013-12-12 06:50:07.996'),
 ('david',7,5,9,12,'2017-12-12 06:50:07.996'),
 ('kiril',11,12,13,10,'2015-12-12 06:50:07.996'),
 ('maks',4,6,7,5,'2010-12-12 06:50:07.996'),
 ('vira',15,6,3,4,'2010-12-12 06:50:07.996'),
 ('maria',14,5,4,8,'2011-12-12 06:50:07.996'),
 ('sofia',13,7,6,15,'2012-12-12 06:50:07.996'),
 ('olya',12,6,7,14,'2013-12-12 06:50:07.996'),
 ('natalya',11,8,3,13,'2014-12-12 06:50:07.996'),
 ('vova',10,12,9,12,'2015-12-12 06:50:07.996'),
 ('roma',5,12,10,11,'2000-12-12 06:50:07.996')
 ;
 
/* select * from user order by created_at;
 select * from friends order by user_id;
 select * from comments order by photos_id;
 select * from messages order by user_id;
 select * from alboms order by albom_name;
  
  select * from user where username like 'An%';
  select * from friends where usernames like '%ma';
  select * from user where username like 'A%';
  select * from photos where image_url like '%g';
  select * from alboms where albom_name like '%is';
  
  select username from user;
  select albom_name from alboms;
  select image_url from photos;
  select usernames from friends;
  select created_at from messages;
  
select *
from friends
where usernames like '%a' ;

select *
from alboms
where albom_name like 'd%' ;

select username,usernames
from user
join friends;

select massages_text,usernames
from messages
join friends; 
*/

alter table `user` add `is_deleted` boolean not null default false after `created_at`;
alter table `photos` add `is_deleted` boolean not null default false after `user_id`;
alter table `messages` add `is_deleted` boolean not null default false after `user_id`;

UPDATE user SET `is_deleted` = true  WHERE `id` IN(1,8,4,5,4);
UPDATE messages SET `is_deleted` = true  WHERE `user_id` IN(13,8,7,6,4);
UPDATE photos SET `is_deleted` = true  WHERE `user_id` IN(13,8,12,7,10);
SELECT * FROM user WHERE `is_deleted` = true;
SELECT count(*) FROM user WHERE `is_deleted` = true;
SELECT username FROM user WHERE `is_deleted` = false ORDER BY created_at;
SELECt * FROM user WHERE username LIKE('An%') ORDER BY created_at;
SELECT * FROM user WHERE `is_deleted` = false AND id = 13;
SELECT * FROM user WHERE `is_deleted` = false AND id = 10;
SELECT * FROM photos WHERE `is_deleted` = false AND image_url LIKE('https://shanon.org%');
SELECT * FROM user WHERE `is_deleted` = false  AND created_at BETWEEN '2014-0101' AND '2017-01-07' ORDER BY created_at;

SELECT * FROM photos  ph 
JOIN user us ON ph.user_id = user_id 
AND ph.is_deleted = false
AND us.is_deleted = false
AND us.id IN(12,8,10); 

SELECT * FROM messages msg
INNER JOIN user us ON msg.user_id = us.id
AND us.is_deleted = false
AND msg.id = 7; 

SELECT * FROM messages msg
INNER JOIN user us ON msg.user_id = us.id
AND us.is_deleted = false
AND msg.id BETWEEN 7 AND 11; 

	