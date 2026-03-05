create database projeto_barbearia;

create table usuarios (
  id serial primary key,
  nome varchar(100),
  tipo varchar(20),
  email varchar(100) unique,
  senha_hash varchar(255)
);

create table servicos (
  id serial primary key,
  descricao varchar(100),
  preco decimal(10,2),
  tempo_estimado int
);

create table horarios_trabalho (
  id serial primary key,
  barbeiro_id int,
  dia_semana int,
  hora_abertura time,
  hora_fechamento time,

  CONSTRAINT fk_barbeiro 
        FOREIGN KEY (barbeiro_id) 
        REFERENCES usuarios(id)
        ON DELETE CASCADE
);

create table agendamentos (
  id serial primary key,
  cliente_id int,
  barbeiro_id int,
  servico_id int,
  data_hora_inicio timestamp,
  status varchar(20),
  CONSTRAINT fk_cliente 
        FOREIGN KEY (cliente_id) 
        REFERENCES usuarios(id),

  CONSTRAINT fk_barbeiro 
        FOREIGN KEY (barbeiro_id) 
        REFERENCES usuarios(id),

  CONSTRAINT fk_servico 
        FOREIGN KEY (servico_id) 
        REFERENCES servicos(id)
)

insert into usuarios (nome, tipo, email, senha_hash)
values ('Reuel', 'Cliente', 'reuel@email.com', 'aslkdlsadkaslkdasl');

insert into usuarios (nome, tipo, email, senha_hash)
values ('Nailton', 'Barbeiro', 'nailtonbarbeiro@email.com', 'lidopjowpqdplaskdpsa');

insert into servicos (descricao, preco, tempo_estimado)
values ('Corte Degrade', 30, 45);

insert into servicos (descricao, preco, tempo_estimado)
values ('Barba Completa', 20, 15);

insert into horarios_trabalho (barbeiro_id, dia_semana, hora_abertura, hora_fechamento)
values (2, 1, '09:00:00', '18:00:00');

insert into agendamentos (cliente_id, barbeiro_id, servico_id, data_hora_inicio, status)
values (1, 2, 1, '2026-03-05 10:00:00', 'agendado');

insert into agendamentos (cliente_id, barbeiro_id, servico_id, data_hora_inicio, status)
values (999, 2, 1, '2026-03-05 13:00:00', 'agendado');
