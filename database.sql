-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );

CREATE TABLE IF NOT EXISTS "user" (
	"id" serial NOT NULL UNIQUE,
	"genre_id" bigint NOT NULL,
	"type" varchar(80) NOT NULL,
	"username" varchar(80) NOT NULL UNIQUE,
	"password" varchar(80) NOT NULL UNIQUE,
	"stage_name" varchar(100) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "venues" (
	"user_id" bigint NOT NULL,
	"genre_id" bigint NOT NULL,
	"id" serial NOT NULL UNIQUE,
	"address" varchar(100) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "genre" (
	"id" serial NOT NULL UNIQUE,
	"name" varchar(100) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "booking" (
	"id" serial NOT NULL UNIQUE,
	"event_at" timestamp without time zone NOT NULL,
	"rating" bigint NOT NULL,
	"artist_id" bigint NOT NULL,
	"venue_id" bigint NOT NULL,
	PRIMARY KEY ("id")
);

ALTER TABLE "user" ADD CONSTRAINT "user_fk1" FOREIGN KEY ("genre_id") REFERENCES "genre"("id");
ALTER TABLE "venues" ADD CONSTRAINT "venues_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "venues" ADD CONSTRAINT "venues_fk1" FOREIGN KEY ("genre_id") REFERENCES "genre"("id");

ALTER TABLE "booking" ADD CONSTRAINT "booking_fk3" FOREIGN KEY ("artist_id") REFERENCES "user"("id");

ALTER TABLE "booking" ADD CONSTRAINT "booking_fk4" FOREIGN KEY ("venue_id") REFERENCES "venues"("id");