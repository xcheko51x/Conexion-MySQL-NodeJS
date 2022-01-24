create database pruebas;

use pruebas;

create table usuarios(
	idUsuario int primary key auto_increment,
	nombre varchar(50) not null,
	telefono varchar(15) not null,
	email varchar(50)
);

insert into usuarios values("", "Sergio P", "123456789", "sergio@prueba.com");
insert into usuarios values("", "Laura L", "891234567", "laura@prueba.com");
insert into usuarios values("", "Andrea X", "987654321", "andrea@prueba.com");

