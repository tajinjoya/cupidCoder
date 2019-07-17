const express = require("express")
const app = express()
const cookieParser = require('cookie-parser')
const fetch = require('node-fetch');

const {Client} = require('pg');

app.use(express.json({
  extended: false
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




const client = new Client({
  user: "postgres",
  password: "secret",
  host: "localhost",
  port: 5432,
  database: "postgres"
});

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


app.post("/", authPost, (req, res) => {
  const {
    name,
    Token
  } = req.body;
  res.send('hi')
})

app.post("/api/loginInfoNewUser", authPost, async (req, res) => {

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

  await client.connect()

  await client.query(`INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio) VALUES('Vidar','${req.body.id}','${gender}','${tabs}','${languageString}','Nacka','', '', 'hi I am ');`)
  //console.log(res.rows[0].message) // Hello world!
  await client.end()

  // client.connect()
  //   .then(() => console.log('connected'))
  //   .then(() => client.query(`INSERT INTO users (user_name,  facebook_id, Gender, tab,languages, user_location, pending_matches, matches, bio) VALUES('Vidar','${req.body.id}','${gender}','${tabs}','${languageString}','Nacka','', '', 'hi I am ');`))
  //   .catch(e => console.log(e))
  //   .finally(() => {
  //     client.end()
  //     res.send('success')

  //   });
  res.send('hi')
})

app.get('/api/allmatches', async function (req, res) {
console.log('cometo here api')

// await client.connect()
// const result = await client.query('SELECT * FROM users')
// await client.end()
  // client.connect()
  //   .then(() => console.log('connected'))
  //   .then(() => client.query('SELECT * FROM users'))
  //   .catch(e => console.log(e))
  //   .finally(() => {
  //     client.end()
  //     res.send('success')

  //   });
  // console.log(result)
  // res.send(result)

})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on port ${port}`))
