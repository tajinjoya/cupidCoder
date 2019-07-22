const express = require("express")
const app = express()
const cookieParser = require('cookie-parser')
const fetch = require('node-fetch');
const cors = require('cors')
const distance = require('google-distance-matrix');
const {Client} = require('pg');


const client = new Client({
  user: "postgres",
  password: "secret",
  host: "localhost",
  port: 5432,
  database: "postgres"
});
client.connect();



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.json({
  extended: false
}));

app.use(cookieParser())


//Auth midware
const authGet = function (req, res, next) {
  const authLink = 'https://graph.facebook.com/me?access_token=';
  fetch(authLink + req.cookies.Token)
    .then(res => res.json())
    .then(json => {
      if (json.name) {
        console.log('success')
        next();
      } else {
        console.log('failure')
        res.status(401).json({
          msg: 'Token is not valid'
        });
      }
    });
};

const authPost = function (req, res, next) {
  const authLink = 'https://graph.facebook.com/me?access_token=';
  fetch(authLink + req.body.Token)
    .then(res => res.json())
    .then(json => {
      if (json.name) {
        console.log('success')
        next();
      } else {
        console.log('failure')
        res.status(401).json({
          msg: 'Token is not valid'
        });
      }
    });
};

//get distance

const getGeoMatrix = (ori, des)=>{
  //latitude/longitude 
  let origins = [ '59.334590000000006 18.0664998']
  let destinations=['59.994590000000006 18.0664998']
  
  distance.key('AIzaSyBiXc2hsL2tQnsGAxGftKxxuVcboW43DQM');
  distance.units('imperial');
   
  distance.matrix(origins, destinations, function (err, distances) {
      if (err) {
          return console.log(err);
      }
      if(!distances) {
          return console.log('no distances');
      }
      if (distances.status == 'OK') {
          for (var i=0; i < origins.length; i++) {
              for (var j = 0; j < destinations.length; j++) {
                  var origin = distances.origin_addresses[i];
                  var destination = distances.destination_addresses[j];
                  if (distances.rows[0].elements[j].status == 'OK') {
                      var distance = distances.rows[i].elements[j].distance.text;
                      console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance);
                  } else {
                      console.log(destination + ' is not reachable by land from ' + origin);
                  }
              }
          }
      }
  });
}

async function checkMatches (req,res) {



const {
  UserId,
  likedUser
}= req.body


const userOneId = await client.query(`SELECT * FROM users WHERE facebook_id='${UserId}'`).then((res) => {return res.rows[0].id})

let userTwoPending = await client.query(`SELECT * FROM users WHERE id='${likedUser}'`).then((res) => {return res.rows[0].pending_matches})

userTwoPending = userTwoPending.split(',');

let isMatch = userTwoPending.find(e => {

  return e == userOneId;
});
console.log('ismatch', isMatch);
if(isMatch){

  await client.query(`
  UPDATE users
  SET matches = matches || '${likedUser}' || ','
  WHERE id = ${userOneId};
  `).then((res) => {return res})

  await client.query(`
  UPDATE users
  SET matches = matches || '${userOneId}' || ','
  WHERE id = ${likedUser};
  `).then((res) => {return res})

console.log('this is a match')
res.send('Matched');
} else {

  await client.query(`
  UPDATE users
  SET pending_matches = pending_matches || '${likedUser}' || ','
  WHERE id = ${userOneId};
  `).then((res) => {return res})
  res.send('notMatched');
  console.log('this is not a match')
}
}


// @router
app.post("/api/loginInfoNewUser", authPost, saveUser)
app.get('/api/allmatches', authGet, getAllUsers)
app.post("/api/checkMatch",authPost, checkMatches);
app.get('/testdistance', getGeoMatrix);
app.get('/testgetall', getAllUsers);


async function getAllUsers (req, res) {
  const result = await client.query('SELECT * FROM users').then((res) => {return res.rows})
  // getGeoMatrix()
  res.send(JSON.stringify(result))
  
}

async function saveUser (req, res) {

  let languageString = '';
  const received = JSON.parse(req.body.userInfo)
  const {
    gender,
    tabs,
    languages,
    bio,
  } = received;

  const {
    Latitude,
    Longitude
  }= req.body
  languages.forEach(language => {
    languageString += language.value + ' ';
  });
  console.log(Latitude+" "+Longitude);
  await client.query(`INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, geoLocation) VALUES('${req.body.facebookName}','${req.body.id}','${gender}','${tabs}','${languageString}','Nacka','', '', '${bio}','${Latitude+" "+Longitude}');`)
  .then(()=> res.send('success'))
  .catch(e => res.send(e))
}



const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on port ${port}`))

