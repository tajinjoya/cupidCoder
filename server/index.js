const express = require("express")
const app = express()
const cookieParser = require('cookie-parser')
const fetch = require('node-fetch');
// const pg = require('pg');

const {Client} = require('pg');

const client = new Client({
    user:"postgres",
    password:"pgpass",
    host:"localhost",
    port:5432,
    database:"postgres"
})

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

app.use(express.json({
  extended: false
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/", authPost, (req, res) => {
  const {
    name,
    Token
  } = req.body;

  res.send('hi')
})

app.post("/api/loginInfoNewUser", authPost, (req, res) => {
  
  const authLink = 'graph.facebook.com/me?access_token=';

})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on port ${port}`))
