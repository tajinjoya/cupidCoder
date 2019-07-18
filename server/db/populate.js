const {Client} = require('pg');

const client = new Client({
    user:"postgres",
    password:"secret",
    host:"localhost",
    port:5432,
    database:"postgres"
});

client.connect()
    .then(()=> console.log('connected'))

    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio) VALUES('Cha','2728189017209232','Male','tab','js','stockholm','', '', 'hi I am ');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio) VALUES('Vidar','2620851437927086','Female','Space','js','Nacka','', '', 'hi I am ');"))
    .then(()=> client.query("INSERT INTO users (id,  user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio) VALUES('3','Tajin','Tajin_fb','Female','Space','js','Solna','', '', 'hi I am ');"))
    // .then(()=> client.query("INSERT INTO users (id,  user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio) VALUES('4','John','John_fb','Male','Space','js','stockholm','', '', 'hi I am ');"))
    // .then(()=> client.query("INSERT INTO users (id,  user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio) VALUES('5','Sravya','Sravya_fb','Female','tab','js','stockholm','', '', 'hi I am ');"))
    // .then(()=> client.query("INSERT INTO users (id,  user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio) VALUES('6','Stina','Stina_fb','Female','tab','js','stockholm','', '', 'hi I am ');"))
    // .then(()=> client.query("INSERT INTO users (id,  user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio) VALUES('7','Lars','Lars_fb','Male','Space','js','stockholm','', '', 'hi I am ');"))
    // .then(()=> client.query("INSERT INTO users (id,  user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio) VALUES('8','Mies','Mies_fb','Male','Space','js','stockholm','', '', 'hi I am ');"))
    // .then(()=> client.query("INSERT INTO users (id,  user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio) VALUES('9','Mucus','Mucus_fb','Male','Space','js','Solna','', '', 'hi I am ');"))
    // .then(()=> client.query("INSERT INTO users (id,  user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio) VALUES('10','Sara','Sara_fb','Female','Space','js','Nacka','', '', 'hi I am ');"))

    .catch(e=>console.log(e))
    .finally(()=>client.end());