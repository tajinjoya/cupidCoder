const express = require("express")
const app = express()
const cookieParser = require('cookie-parser')
const fetch = require('node-fetch');
const cors = require('cors')

const {
  Client
} = require('pg');


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



const client = new Client({
  user: "postgres",
  password: "secret",
  host: "localhost",
  port: 5432,
  database: "postgres"
});
client.connect();

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

app.post("/api/loginInfoNewUser", authPost, postUser)
app.get('/api/allmatches', authGet, getAllUsers)


async function getAllUsers (req, res) {
  const result = await client.query('SELECT * FROM users').then((res) => {return res.rows})
  res.send(JSON.stringify(result))
}

async function postUser (req, res) {
  let languageString = '';
  const received = JSON.parse(req.body.name)
  const {
    gender,
    tabs,
    languages
  } = received;

  languages.forEach(language => {
    languageString += language.value + ' ';
  });

  await client.query(`INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio) VALUES('Vidar','${req.body.id}','${gender}','${tabs}','${languageString}','Nacka','', '', 'hi I am ');`)
  .then(()=> res.send('success'))
  .catch(e => res.send(e))
}



const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on port ${port}`))

// async function getAllUsers (req, res) {
//   const result = await client.query('SELECT * FROM users').then((res) => {return res}).then(res.send('hiihihih'))
//   //console.log(JSON.stringify(result.rows))
//   //res.send({ hello : 'cha'})
// }