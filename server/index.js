const express = require("express")
const app = express()
var passport = require("passport")
//var session = require("express-session")
var GitHubStrategy = require("passport-github2").Strategy

// const GITHUB_CLIENT_ID = "4339ce46cf25aa332b0c" 
// const GITHUB_CLIENT_SECRET = "5725a13a86e8263752b1fddcca51d464d555be57" 

// passport.use(
//   new GitHubStrategy(
//     {
//       clientID: GITHUB_CLIENT_ID,
//       clientSecret: GITHUB_CLIENT_SECRET,
//     },
//     function(accessToken, refreshToken, profile, done) {
//       console.log({ accessToken, refreshToken, profile })

//     }
//   )
// )
app.use(express.json({extended: false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post("/", (req, res) => {
     const {
         name
     } = req.body;

    console.log(req.body);
    console.log(name)
    console.log('received')
    res.send('hi')
})

// app.get(
//   "/auth/github",
//   passport.authenticate("github", { scope: ["repo:status"] }),
//   function(req, res) { }
// )

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on port ${port}`))