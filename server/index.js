const express = require("express")
const app = express()
const cookieParser = require('cookie-parser')
const fetch = require('node-fetch');
const cors = require('cors')
const distance = require('google-distance-matrix');
const {
  Client
} = require('pg');


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

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

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
const  getGeoMatrix = async (player1Lat, player1Long, player2Lat, player2Long)=>{
  let toStringPlyerOneLat = player1Lat.toString();
  let toStringPlyerOneLong = player1Long.toString();
  let toStringPlyerTwoLat = player2Lat.toString();
  let toStringPlyerTwoLong = player2Long.toString();

  //latitude/longitude 
  let origins = [toStringPlyerOneLat+' '+toStringPlyerOneLong]
  let destinations=[toStringPlyerTwoLat+' '+toStringPlyerTwoLong]
  
  // let origins = [toStringOne]
  // let destinations=[toStringTwo]
  distance.key('AIzaSyBiXc2hsL2tQnsGAxGftKxxuVcboW43DQM');
  distance.units('metric');
  let promiseDistace = new Promise ((resolve,reject)=>{distance.matrix(origins, destinations,  function (err, distances) {
      if (err) {
          return console.log(err);
      }
      if(!distances) {
          return console.log('no distances');
      }
      if (distances.status == 'OK') {
          for (var i=0; i < origins.length; i++) {
              for (var j = 0; j < destinations.length; j++) {
                  // var origin = distances.origin_addresses[i];
                  // var destination = distances.destination_addresses[j];
                  if (distances.rows[0].elements[j].status == 'OK') {
                      var distance = distances.rows[i].elements[j].distance.text;
                      resolve(distance);
                  } else {
                      reject('error')
                  }
              }
          }
        }
      }
  })});
  let awaitPromise = await promiseDistace.then((result)=>{
    return result;
  })
  return awaitPromise
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
  `).then((res) => {
      return res
    })

    await client.query(`
  UPDATE users
  SET matches = matches || '${userOneId}' || ','
  WHERE id = ${likedUser};
  `).then((res) => {
      return res
    })

    console.log('this is a match')
    res.send('Matched');
  } else {

    await client.query(`
  UPDATE users
  SET pending_matches = pending_matches || '${likedUser}' || ','
  WHERE id = ${userOneId};
  `).then((res) => {
      return res
    })
    res.send('notMatched');
    console.log('this is not a match')
  }
}


// @router
app.post("/api/loginInfoNewUser", authPost, saveUser)
app.get('/api/allmatches', authGet, getAllUsers)
app.post("/api/checkMatch", authPost, checkMatches);
app.get('/testdistance', getGeoMatrix);
app.get('/testgetall', getAllUsers);
app.get('/api/getMatches', getMatches)

async function getMatches(req, res) {
  const userId = req.cookies.id;
  let allMatches = await client.query(`SELECT * FROM users WHERE facebook_id='${userId}'`).then((res) => {
    return res.rows[0].matches;
  })

  //console.log(typeof(allMatches),'allMatches')
  if(allMatches !== ''){
  allMatches = '(' + allMatches + ')';
  //console.log(allMatches,'allMatches')
  console.log('we have matches')
  let matches = await client.query(`
    SELECT *
    FROM users
    where id in ${allMatches}`).then((res) => {
    return res.rows;
  }).then(matches => res.send(JSON.stringify(matches)))
} else {
  console.log('no matches')
  res.send('{"match" : "none"}');
}

}

async function getAllUsers(req, res) {
  const result = await client.query('SELECT * FROM users').then((res) => {
    return res.rows
  })


async function getAllUsers (req, res) {
  const result = await client.query('SELECT * FROM users').then((res) => {return res.rows})
  const playerOneLatitude = req.cookies.latitude.toString();
  const playerOneLongitude = req.cookies.longitude.toString()
  for (let i = 0; i < result.length; i++) {
    let distancePlayers = await getGeoMatrix(playerOneLatitude, playerOneLongitude, result[i].latitude, result[i].longitude)
    result[i].distanceFromPlayerOne= distancePlayers
  }
  let finalDataMeter= [];
  let finalDataKilloMeter= [];
  result.forEach(e => {
    if(/(\d+).?(\d*)\s*(m)/g.test(e.distanceFromPlayerOne)){finalDataMeter.push(e)} ;
  });
  result.forEach(e => {
    if(/(\d+).?(\d*)\s*(km)/g.test(e.distanceFromPlayerOne)){finalDataKilloMeter.push(e)} ;
  });

  let sortMeter = finalDataMeter.sort((a,b)=> {return parseInt(a.distanceFromPlayerOne)-parseInt(b.distanceFromPlayerOne)})
  let sortKm = finalDataKilloMeter.sort((a,b)=> {return parseInt(a.distanceFromPlayerOne)-parseInt(b.distanceFromPlayerOne)})
  let mergeArray = [...sortMeter,...sortKm]

  
  res.send(JSON.stringify(mergeArray))
  
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
  } = req.body
  languages.forEach(language => {
    languageString += language.value + ' ';
  });
console.log('requre console', req.body);

  await client.query(`INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio, latitude, longitude) VALUES('${req.body.facebookName}','${req.body.id}','${gender}','${tabs}','${languageString}','Nacka','', '', '${bio}','${Latitude}', '${Longitude}');`)
  .then(()=> res.send('success'))
  .catch(e => res.send(e))

  const userOneId = await client.query(`SELECT * FROM users WHERE facebook_id='${req.body.id}'`).then((res) => {return res.rows[0].id})

  //gps data of player 1 must be uppdated
  await client.query(`
  UPDATE users
  SET latitude = '${Latitude}',longitude = '${Longitude}'
  WHERE id = ${userOneId};
  `).then((res) => {return res})
}



const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on port ${port}`))


let yolo = [{distance : '7 km'}, { distance : '5.5 m'}, { distance : '6.5 m'},{distance : '5,3 km'}, {distance : '5 m'}];


