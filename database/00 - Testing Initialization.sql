delete from card;
delete from player;
delete from game;
delete from "user";

insert into game ("name", status, seat_count, created_date) values ('test game 1', 'Started', 5, now());
insert into game ("name", status, seat_count, created_date) values ('test game 2', 'Started', 2, now());
insert into game ("name", status, seat_count, created_date) values ('test game 3', 'In Progress', 3, now());

