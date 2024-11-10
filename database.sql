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


4	Admin	cars10034	$2a$10$fRd31j9oC6v4bFtJRznq9uCVMkXZ6/85d1rGUL5FR8tkWaFkVKtEK	
1	Artist	AnnieBangBang	$2a$10$AGpcGBF3z2cTyphWki1C.Ot1nIhV4e49ryFU.VUasSszmwpmLZsRa	
2	Artist	ranchoUnicorno	$2a$10$2jhtIXLOnsNgzxlpJfYG8eCS9/AETM6LLIujGzh6e5S5/7r3Mbf0y	
3	Artist	AtomicLights	$2a$10$KYR34uiHwdk/xQzIz.RTDOe.MvvacXMemniisA5Zc3cYLI3ZWnV6y	
5	Artist	CheapBouquet	$2a$10$SFaY7PuwGDeckszgNKKUvOIBzbRjEEUrBP8VxagsiPfdMyQhQpZWy	
9	Artist	kingSizedCoffin	$2a$10$V3WHM.v5TSBlQc19dvLaeuBOXsNj.AbmqQRisVUs4pFfA5Ty3D0kK	
11	Artist	dreydk	$2a$10$Tg9sbZdzX0.jepWP/OR30OKAM5Obn5JqyNxyr717judyS2h8Pnp3e	
12	Artist	theWalkerBros	$2a$10$6/ko2qN0GV2WzddL42Ma0eYdAAPYA.HjmWz5IDVhaurN1xNmQCXRe	
13	Artist	theWeepingCovenant	$2a$10$X3sj66oDP9RIkfQ2nFB3PubhEdXH5.hUr1IWOnIpvI17fWlJ0zpFK	
14	Artist	pityParty	$2a$10$uUusELcz44Dcox4Q9TGGvO6dWOXeoSvB4OukS3qerBvWW41YZoNkW	
15	Artist	seyiOyinloye	$2a$10$kHDIMV.w1BIcrS4BBIDvoumMV5yGegmQDmLO1k25kztFchoe6aNF2	
16	Artist	mommyLogBalls	$2a$10$Tn4D0tUcAXGFA.Ylsgr6nu2BQLmLLZAALdXtyulyRYjT.pp2pmSKy	
17	Artist	honeyPlease	$2a$10$WPCcrY2zwu2BxVmeUR4vv.9LXqn/LIAs.b1iHKCrh940GqM1sp6DW	
6	Venue	GrandAve	$2a$10$gBtAJrHFyVtYAeqIBZByXuspf18PFJJk1BsBMkWWmubfm1Ds0.4vy	
7	Venue	DupontAve	$2a$10$seSTdjl7yvPeRpR0C6SuZuYwFIouNa8L3yAQvfj5gxvhCwgFeMB/q	
8	Venue	JeffersonAve	$2a$10$ws.QztioOWXp5B9CFuEI0uXnqPV8kS0IiCMysjU6rZ1ezAr1Dnkma	
18	Venue	RadioDr	$2a$10$Akh4eDTvxhpDfBvk4P4tWOkEuKH/M3CIppU2krKHayGlbdaN7v4EC	
19	Venue	BryantAve	$2a$10$SJrAgHaw4MUNOiL1qYabWOdnMN9PjHkiAChGXNivSWNzj2xGqqShq	
20	Venue	DaleSt	$2a$10$SN/.wYnrQTL1yT7whaZEJeukOCc0nAcrM4KWwkuL88VL6V5Jqa63.	
21	Venue	HennepinAve	$2a$10$RFxL0cI8fbeVRU37mmfH/eW/N1f2BDW3rWMasPvsryJr6cTvc4aKG	
22	Venue	IrvingAve	$2a$10$cxnk4Bc8g0jGzPcXxkHWj.4BHT0/oVIT2aYNcpHMLN5VOPsCH82vu	
23	Venue	LakeSt	$2a$10$Ll4d7Ks1p4PSi.jV30hGvu3T2YTpBz9lIad/6xYj3jhKs9l7eqZRm	
24	Venue	LincolnAve	$2a$10$iUURFZdl3bQinLaaDnfh9ef1KtyyUektUkyoHk0W/O9Wsk8MsomGu	
25	Venue	LyndaleAve	$2a$10$KthD6CTop.42D.QSXNyn8eefkVsQobXVJpsGxgu7dp8UShnMVhhsS	
26	Venue	SummitAve	$2a$10$iSd.R6t2Fp1C05SZbBTdTOGsdwMxA1//IXdSgav74d10M4WCapy7m	

5	2			388
5	4			387
7	4	3		382
7	1	1		381
7	3	11		380
7	5	14		379
7	2	16		378
7	5	2		377
7	4	15		376
1	2			375
1	5			374
1	4			373
1	5			372
1	1			371
1	5			370
1	4			369
1	5			368
1	1			367
1	4			366
1	4		8	365
22	1	13		360
22	4	17		357
22	4	5		356
22	3	3		355
22	5	1		354
22	3	11		353
22	4	14		352
22	4	16		348
22	4	12		345
22	5	9		344
22	4	2		342
22	3	15		341