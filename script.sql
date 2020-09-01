CREATE TABLE administrador(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR,
  lastname VARCHAR,
  dni INTEGER unique,
  email VARCHAR UNIQUE NOT null,
  celular VARCHAR,
  gender VARCHAR,
  foto VARCHAR,
  fecha_nacimiento VARCHAR,
  calle VARCHAR,
  ciudad VARCHAR,
  provincia VARCHAR,
  distrito VARCHAR,
  password VARCHAR
);

create table profesor (
	id serial PRIMARY KEY NOT NULL,
    name VARCHAR,
    lastname VARCHAR,
    dni INTEGER unique,
    email VARCHAR UNIQUE,
    celular VARCHAR,
    gender VARCHAR,
    foto VARCHAR,
    fecha_nacimiento VARCHAR,
	calle VARCHAR,
	ciudad VARCHAR,
	provincia VARCHAR,
	distrito VARCHAR,
    cv VARCHAR,
    isAccepted BOOLEAN,
    password VARCHAR
);

create table tutor (
	id serial PRIMARY KEY NOT NULL,
    name VARCHAR,
    lastname VARCHAR,
    dni INTEGER unique,
    email VARCHAR UNIQUE,
    celular VARCHAR,
    gender VARCHAR,
    foto VARCHAR,
    fecha_nacimiento VARCHAR,
	calle VARCHAR,
	ciudad VARCHAR,
	provincia VARCHAR,
	distrito VARCHAR,
    cv VARCHAR,
    isAccepted BOOLEAN,
    password VARCHAR
);

CREATE TABLE apoderado (
    id serial PRIMARY KEY NOT NULL,
    name VARCHAR,
    lastname VARCHAR,
    dni INTEGER unique,
    email VARCHAR UNIQUE,
    celular VARCHAR,
    gender VARCHAR,
    foto VARCHAR,
    fecha_nacimiento VARCHAR,
	calle VARCHAR,
	ciudad VARCHAR,
	provincia VARCHAR,
	distrito VARCHAR,
	password VARCHAR
);

create table colegio (
	id serial primary key not null,
	nombre VARCHAR,
	calle VARCHAR,
	ciudad VARCHAR,
	provincia VARCHAR,
	distrito VARCHAR,
	codigo_ugel VARCHAR unique
);

CREATE TABLE alumno (
    id serial PRIMARY KEY NOT NULL,
    name VARCHAR,
    lastname VARCHAR,
    dni INTEGER unique,
    email VARCHAR UNIQUE,
    celular VARCHAR,
    gender VARCHAR,
    foto VARCHAR,
    fecha_nacimiento VARCHAR,
	calle VARCHAR,
	ciudad VARCHAR,
	provincia VARCHAR,
	distrito VARCHAR,
    grado INTEGER,
    studies_in INTEGER,
    parent INTEGER,
    tutored_by INTEGER,
    password VARCHAR,
    foreign key (studies_in) references colegio (id),
    foreign key (parent) references apoderado (id),
    foreign key (tutored_by) references tutor (id)
);

create table curso (
	id serial primary key not null,
	nombre VARCHAR,
	descripcion VARCHAR,
	horas_totales INTEGER,
	grado INTEGER,
	contenido VARCHAR,
	teached_by INTEGER,
	foreign key (teached_by) references profesor (id)
);

create table reforzamiento (
	id serial PRIMARY KEY NOT NULL,
	categoria VARCHAR,
	descripcion VARCHAR,
	contenido VARCHAR,
	teached_in INTEGER,
	foreign key (teached_in) references curso (id)
);

create table matricula (
	id serial primary key not null,
	signed INTEGER,
	signed_in INTEGER,
	progreso INTEGER,
	notas INTEGER[],
	foreign key (signed) references alumno (id),
	foreign key (signed_in) references curso (id)
);