
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './login'
import Gender from './makeProfile'
// class App extends Component {

//   render() {

//     return (
//       <div>
//     <Router>
//       <Route exact path="/" component={Login} />
//       <Route path="http://localhost:3000/makeProfile" component={Gender} />
//     </Router>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/makeProfile" component={Gender} />
      </div>
    </Router>
  );
}

export default App;