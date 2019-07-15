
import React, { Component } from 'react';
import {Route,Redirect} from 'react-router';

import GitHubLogin from 'react-github-login';

class Login extends Component {

  render() {

    const onSuccessGithub = (response) => {
      console.log(response);
      console.log('hel')
    } 

    return (
      <div className="App" align="center">
        <h1>LOGIN WITH GITHUB AND MICROSOFT</h1>

          <GitHubLogin clientId="4339ce46cf25aa332b0c"
            onSuccess={onSuccessGithub}
            buttonText="LOGIN WITH GITHUB"
            className="git-login"
            valid={true}
            redirectUri="http://localhost:3000/makeProfile"
          />
      </div>
    );
  }
}

export default Login;