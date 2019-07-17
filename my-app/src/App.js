
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './login'
import Gender from './makeProfile'
import Home from './home'
import Cards from './Card'


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/makeProfile" component={Gender} />
        <Route path="/home" component={Home} />
        <Route path="/card" component={Cards} />

      </div>
    </Router>
  );
}

export default App;