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

    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Vidar','2620851437927086','Male','Space','Javascript,Ruby,Typescript,Python','Sweden Stockholm','3,', '2,3,' , 'Hi I am Vidar.' , '' , '59.334590000000006', '18.0664998');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Cha','2278556982240503','Male','tab','Javascript,Java,C#,SQL,PHP','stockholm','1,', '2,3,', 'Tja!! I am cha. I can speak Javascript. if you speak Java, do not contact me', '', '59.934590000000006', '18.0664998');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Tajin','10156432651737078','Female','tab','Javascript,cshop,Cplus,SQL','stockholm','3,', '2,3,', 'Tja!! I am Tajin.' , '', '59.994590000000006', '18.0664998');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Zachary','100000169226739','Male','Space','Python,Javascript,Java,cshop','stockholm','3', '2,3,', 'im a big soft boy (pic is catfish soz)', '', '59.337973', '17.941545');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('André','1383518758','Male','tabs','Javascript,Java,Ruby,Swift','stockholm','1,', '', 'I like happy people', '', '59.337973', '17.941545');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Nick','677353276','Male','Space','Javascript,Typescript,Python,Java','Sweden Stockholm','3,', '2,3,' , 'Hi I am Nick' , '' , '59.334590000000006', '18.0664998');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Olivia Ekman Sundin','1545205203','Female','tab','Java,SQL','stockholm','1,', '2,3,', 'This is me!', '', '59.934590000000006', '18.0664998');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Georgios Tagkoulis','695493839','Male','tab','Javascript,Ruby','stockholm','3,', '2,3,', 'hello!' , '', '59.994590000000006', '18.0664998');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Helga','513346090','Female','Space','Python,PHP','stockholm','3', '2,3,', 'Hello!', '', '59.337973', '17.941545');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Alexandra Tang','638584303','Female','tabs','Javascript,cshop,Cplus,SQL','stockholm','1,', '', 'I like happy people', '', '59.337973', '17.941545');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Dragosh Craciun','100009109930043','Male','Space','Javascript,Typescript,Python,Java','Sweden Stockholm','3,', '2,3,' , 'Hi!' , '' , '59.334590000000006', '18.0664998');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Marcus Kalmár','100000172895281','Male','tab','Javascript,Ruby,Typescript,Python','stockholm','1,', '2,3,', 'Hello!', '', '59.934590000000006', '18.0664998');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Prince Philip','338131216201585','Male','tab','Javascript,Typescript,Python','stockholm','1,', '2,3,', 'Hello!', '', '59.934590000000006', '18.0664998');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('King Gustaf','100018335019091','Male','tab','Java,Ruby,Swift','stockholm','1,', '2,3,', 'Hello!', '', '59.934590000000006', '18.0664998');"))

    .catch(e=>console.log(e))
    .finally(()=>client.end());``