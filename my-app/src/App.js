
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './login'
import Gender from './makeProfile'
import Home from './home'
import Card from './Card'
import Geo from './Geo'
import Matches from './matches'



function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/makeProfile" component={Gender} />
        <Route path="/home" component={Home} />
        <Route path="/card" component={Card} />
        <Route path="/geo" component={Geo} />
        <Route path="/matches" component={Matches} />

      </div>
    </Router>
  );
}

export default App;