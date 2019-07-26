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

    //.then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Vidar','2620851437927086','Male','Space','Javascript,Ruby,Typescript,Python','Sweden Stockholm','3,', '' , 'Hi I am Vidar.' , 'https://github.com/VidarSoder' , '59.351629', '18.078784');"))//
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Cha','2278556982240503','Male','tab','Javascript,Java,C#,SQL,PHP','stockholm','20,', '2,3,', 'Tja!! I am cha. I can speak Javascript. if you speak Java, do not contact me', '', '59.352470', '18.058760');"))//
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Tajin','10156432651737078','Female','tab','Javascript,cshop,Cplus,SQL','stockholm','20,', '2,3,', 'Tja!! I am Tajin.' , '', '59.345640', '18.097315');"))//
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Zachary','100000169226739','Male','Space','Python,Javascript,Java,cshop','stockholm','20,1,', '2,3,', 'im a big soft boy (pic is catfish soz)', '', '59.334548', '18.099134');"))//
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('André','1383518758','Male','tabs','Javascript,Java,Ruby,Swift','stockholm','20,2,', '', 'I like happy people', '', '59.308669', '18.167989');"))//
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Nick','677353276','Male','Space','Javascript,Typescript,Python,Java','Sweden Stockholm','3,', '2,3,20,' , 'Hi I am Nick' , '' , '59.204839', '18.202344');"))//
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Olivia Ekman Sundin','1545205203','Female','tab','Java,SQL','stockholm','1,2', '2,3,', 'This is me!', '', '59.260444', '18.036347');"))//
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Georgios Tagkoulis','695493839','Male','tab','Javascript,Ruby','stockholm','3,', '2,3,', 'hello!' , '', '59.337142', '17.933981');"))//
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Helga','513346090','Female','Space','Python,PHP','stockholm','3', '2,3,', 'Hello!', '', '59.323526', '17.757383');"))//
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Alexandra Tang','638584303','Female','tabs','Javascript,cshop,Cplus,SQL','stockholm','1,', '', 'I like happy people', '', '59.252394', '18.081379');"))//
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Dragosh Craciun','100009109930043','Male','Space','Javascript,Typescript,Python,Java','Sweden Stockholm','3,20,', '2,3,' , 'Hi!' , '' , '59.364115', '18.003648');"))//
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Marcus Kalmár','100000172895281','Male','tab','Javascript,Ruby,Typescript,Python','stockholm','1,', '2,3,', 'Hello!', '', '59.433352', '18.088921');"))//
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Prince Philip','338131216201585','Male','tab','Javascript,Typescript,Python','stockholm','1,20,', '2,3,', 'Hello!', '', '59.334467', '18.043639');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('King Gustaf','100018335019091','Male','tab','Java,Ruby,Swift','stockholm','1,20,', '2,3,', 'Hello 😳', '', '59.326294', '18.072965');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Ludvig','584063738','Male','tab','Java,cshop,Cplus','stockholm','1,', '2,3,', 'Hello!', '', '59.333154', '18.065307');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Sahin Aslan','100001446027549','Male','tab','Java,cshop,Cplus','stockholm','1,20,', '2,3,', 'i love inside jokes, id love to be a part of it someday', '', '59.324381', '18.063533');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Strindberg','100003528893455','Male','Space','Ruby,Swift','stockholm','1,', '2,3,', 'Hello!', '', '59.317421', '18.031003');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Sandström:','637631582','Male','tab','Java,cshop,Typescript,Python','stockholm','1,', '2,3,', 'Hello!', '', '59.365021', '18.137189');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Beyoncé','28940545600','Female','tab','Ruby,Swift,Python,Java','stockholm','1,', '2,3,', 'Hello!', '', '59.303908', '18.117586');"))
    .then(()=> client.query("INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, gitHub, latitude, longitude) VALUES('Aubrey plaza','100021762411332','Female','tab','Ruby,SQL,Python,Java,Javascript','stockholm','1,', '2,3,', 'Hello!', '', '59.303908', '18.036347');"))


    .then(()=> client.query("INSERT INTO messages(chatId, messages1) VALUES('3_20','Hello :3/ How are you???');"))
    .then(()=> client.query("INSERT INTO messages(chatId, messages1) VALUES('15_20','plz help me/ im loneeelyyy');"))


    .catch(e=>console.log(e))
    .finally(()=>client.end());``