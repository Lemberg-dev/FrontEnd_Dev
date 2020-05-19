use magazin;

insert into viddil (name,tovar_id) values 
("ryba",1),
("myaso",2),
("hlib",3),
("voda",4),
("himia",5)
;

insert into tovar (name,qty,vurobnuk,prodavets_id) values 
("forel",25,"usa",1),#1
("file_kuryache",21,"lviv",2),#2
("baton",57,"ukraine",3),#3
("moya_voda",83,"karpaty",4),#4
("tide",71,"Germany",5);#5

insert into sklad(name,tovar_id,viddil_id) values 
("Lviv",1,1),
("Ternopil",2,2),
("Kiyv",3,3),
("Ivano-Frankivsk",4,4),
("Rudky",5,5);

insert into prodavets(first_name,second_name) values 
("Oleh","Lvivskiy"),
("David","Protasov"),
("Andriy","Staryk"),
("Maria","Petrushyn"),
("Natalia","Kinash");

insert into kassa (name,prodavets_id,pokupets_id) values 
("expres",1,1),
("low",2,2),
("medium",3,3),
("slow",4,4),
("fast",5,5)
;

insert into kamera_shovu (name,pokupets_id) values 
("persha",1),
("druga",2),
("tretya",3),
("chetverta",4),
("pyata",5);

insert into pokupets (first_name,second_name) values
("Maria","Liver"),
("Kateruna","Dorosh"),
("Victoria","Shumyk"),
("Andriy","Staryk"),
("Ihor","Kulka");