DROP TABLE public.game;

CREATE TABLE public.game (
	id int4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	"name" varchar NOT NULL,
	status varchar NOT NULL,
	seat_count int4 NOT NULL,
	created_date timestamptz NOT NULL,
	CONSTRAINT game_pk PRIMARY KEY (id)
);


DROP TABLE public."user";

CREATE TABLE public."user" (
	id int4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	"name" varchar NOT NULL,
	salt varchar NOT NULL,
	passhash varchar NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY (id)
);


DROP TABLE public.player;

CREATE TABLE public.player (
	id int4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	game_id int4 NOT NULL,
	user_id int4 NOT NULL,
	seat_index int4 NOT NULL,
	is_active bool NOT NULL,
	CONSTRAINT player_pk PRIMARY KEY (id),
	CONSTRAINT player_game_fk FOREIGN KEY (game_id) REFERENCES public.game(id),
	CONSTRAINT player_user_fk FOREIGN KEY (user_id) REFERENCES public."user"(id)
);


DROP TABLE public.card;

CREATE TABLE public.card (
	id int4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	game_id int4 NOT NULL,
	"index" int4 NOT NULL,
	value varchar NOT NULL,
	cardholder_id int4 NOT NULL,
	is_discard bool NOT NULL,
	CONSTRAINT card_pk PRIMARY KEY (id),
	CONSTRAINT cardholder_fk FOREIGN KEY (cardholder_id) REFERENCES public.player(id),
	CONSTRAINT deck_game_fk FOREIGN KEY (game_id) REFERENCES public.game(id)
);