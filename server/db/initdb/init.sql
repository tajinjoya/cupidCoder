	
DROP TABLE IF EXISTS users;

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
    latitude VARCHAR,
    longitude VARCHAR

);

-- INSERT INTO users (user_name) VALUES('chawer');
-- INSERT INTO users (facebook_id) VALUES('chaaaaaa')


