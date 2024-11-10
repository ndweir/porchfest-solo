-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );

-- CREATE TABLE IF NOT EXISTS "user" (
-- 	"id" serial NOT NULL UNIQUE,
-- 	"genre_id" bigint NOT NULL,
-- 	"type" varchar(80) NOT NULL,
-- 	"username" varchar(80) NOT NULL UNIQUE,
-- 	"password" varchar(80) NOT NULL UNIQUE,
-- 	"stage_name" varchar(100) NOT NULL,
-- 	PRIMARY KEY ("id")
-- );

-- CREATE TABLE IF NOT EXISTS "venues" (
-- 	"user_id" bigint NOT NULL,
-- 	"genre_id" bigint NOT NULL,
-- 	"id" serial NOT NULL UNIQUE,
-- 	"address" varchar(100) NOT NULL,
-- 	PRIMARY KEY ("id")
-- );

-- CREATE TABLE IF NOT EXISTS "genre" (
-- 	"id" serial NOT NULL UNIQUE,
-- 	"name" varchar(100) NOT NULL,
-- 	PRIMARY KEY ("id")
-- );

-- CREATE TABLE IF NOT EXISTS "booking" (
-- 	"id" serial NOT NULL UNIQUE,
-- 	"event_at" timestamp without time zone NOT NULL,
-- 	"rating" bigint NOT NULL,
-- 	"artist_id" bigint NOT NULL,
-- 	"venue_id" bigint NOT NULL,
-- 	PRIMARY KEY ("id")
-- );

-- ALTER TABLE "user" ADD CONSTRAINT "user_fk1" FOREIGN KEY ("genre_id") REFERENCES "genre"("id");
-- ALTER TABLE "venues" ADD CONSTRAINT "venues_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");

-- ALTER TABLE "venues" ADD CONSTRAINT "venues_fk1" FOREIGN KEY ("genre_id") REFERENCES "genre"("id");

-- ALTER TABLE "booking" ADD CONSTRAINT "booking_fk3" FOREIGN KEY ("artist_id") REFERENCES "user"("id");

-- ALTER TABLE "booking" ADD CONSTRAINT "booking_fk4" FOREIGN KEY ("venue_id") REFERENCES "venues"("id");

-- CREATE TABLE IF NOT EXISTS "user" (
-- 	"id" SERIAL PRIMARY KEY,
-- 	"genre_id" bigint,
-- 	"type" varchar(80),
-- 	"username" varchar(80) NOT NULL UNIQUE,
-- 	"password" varchar(80) NOT NULL UNIQUE,
-- 	"stage_name" varchar(100),
-- 	"time_available" integer
-- );

-- CREATE TABLE IF NOT EXISTS "venues" (
-- 	"user_id" bigint NOT NULL,
-- 	"genre_id" bigint,
-- 	"id" serial UNIQUE,
-- 	"address" varchar(100),
-- 	PRIMARY KEY ("id")
-- );

-- CREATE TABLE IF NOT EXISTS "genre" (
-- 	"id" serial NOT NULL UNIQUE,
-- 	"name" varchar(100) NOT NULL,
-- 	PRIMARY KEY ("id")
-- );

-- CREATE TABLE IF NOT EXISTS "booking" (
-- 	"id" serial UNIQUE,
-- 	"event_at" timestamp without time zone,
-- 	"rating" bigint NOT NULL,
-- 	"artist_id" bigint NOT NULL,
-- 	"venue_id" bigint NOT NULL,
-- 	PRIMARY KEY ("id")
-- );

-- ALTER TABLE "user" ADD CONSTRAINT "user_fk1" FOREIGN KEY ("genre_id") REFERENCES "genre"("id");
-- ALTER TABLE "venues" ADD CONSTRAINT "venues_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
-- ALTER TABLE "venues" ADD CONSTRAINT "venues_fk1" FOREIGN KEY ("genre_id") REFERENCES "genre"("id");
-- ALTER TABLE "booking" ADD CONSTRAINT "booking_fk3" FOREIGN KEY ("artist_id") REFERENCES "user"("id");
-- ALTER TABLE "booking" ADD CONSTRAINT "booking_fk4" FOREIGN KEY ("venue_id") REFERENCES "venues"("id");

-- CREATE TABLE IF NOT EXISTS "user" (
-- 	"id" bigint NOT NULL,
-- 	"type" varchar(80) NOT NULL,
-- 	"username" varchar(80) NOT NULL UNIQUE,
-- 	"password" varchar(80) NOT NULL UNIQUE,
-- 	"stage_name" varchar(100),
-- 	PRIMARY KEY ("id")
-- );

-- CREATE TABLE IF NOT EXISTS "booking" (
-- 	"user_id" bigint NOT NULL,
-- 	"rating" bigint NOT NULL,
-- 	"artist_id" bigint NOT NULL,
-- 	"venue_id" bigint NOT NULL
-- );


-- ALTER TABLE "booking" ADD CONSTRAINT "booking_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");

CREATE TABLE IF NOT EXISTS "user" (
	"id" SERIAL PRIMARY KEY,
	"type" varchar(80) NOT NULL,
	"username" varchar(80) NOT NULL UNIQUE,
	"password" varchar(80) NOT NULL,
	"stage_name" varchar(100)
);

CREATE TABLE IF NOT EXISTS "booking" (
	"user_id" bigint NOT NULL,
	"rating" INTEGER NOT NULL,
	"artist_id" INTEGER DEFAULT NULL,
	"venue_id" INTEGER DEFAULT NULL
);


ALTER TABLE "booking" ADD CONSTRAINT "booking_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "booking"
ADD "ratingId" SERIAL PRIMARY KEY NOT NULL;

ALTER TABLE "booking" ADD CONSTRAINT unique_user_artist UNIQUE ("user_id", "artist_id");
ALTER TABLE "booking" ADD CONSTRAINT unique_user_venue UNIQUE ("user_id", "venue_id");

DELETE FROM "booking"
WHERE user_id = 7 AND artist_id = 3;

ALTER TABLE "user" ALTER COLUMN ("password") varchar(80) NULL;
