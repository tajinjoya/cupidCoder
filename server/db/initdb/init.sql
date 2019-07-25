DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS messages;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_name  VARCHAR,
    facebook_id VARCHAR,
    Gender VARCHAR,
    tab VARCHAR,
    languages VARCHAR,
    user_location VARCHAR,
    pending_matches VARCHAR,
    matches VARCHAR,
    bio VARCHAR,
    gitHub VARCHAR,
    latitude VARCHAR,
    longitude VARCHAR
);

CREATE TABLE messages(
    id SERIAL PRIMARY KEY,
    chatId VARCHAR,
    messages1 VARCHAR
);


