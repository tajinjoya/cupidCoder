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

    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, latitude, longitude) VALUES('Vidar','2620851437927086','Programmer','Space','Javascript,Java,Ruby,Python,Typescript,Cplus,PHP,Swift,cshop,SQL','Sweden Stockholm','', '2,3,', 'Hi I am Vidar.', '59.334590000000006', '18.0664998');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, latitude, longitude) VALUES('Cha','2278556982240503','Programmer','tab','Javascript,Java,Python','stockholm','1,', '2,3,', 'Tja!! I am cha. I can speak Javascript. if you speak Java, do not contact me', '59.934590000000006', '18.0664998');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, latitude, longitude) VALUES('Tajin','10156432651737078','Female','tab','Java','stockholm','', '2,3,', 'Tja!! I am Tajin.' , '59.994590000000006', '18.0664998');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, latitude, longitude) VALUES('Zachary','100000169226739','Male','Space','Javascript','stockholm','1,', '', 'im a big soft boy (pic is catfish soz)', '59.337973', '17.941545');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, latitude, longitude) VALUES('André','1383518758','Male','tabs','Javascript,Java,Ruby','stockholm','1,', '', 'i like happy people', '59.337973', '17.941545');"))



    .catch(e=>console.log(e))
    .finally(()=>client.end());