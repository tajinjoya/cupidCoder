import React from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import Cookies from "universal-cookie";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  handleSubmit = event => {
    console.log("cometo here");
    console.log(this.state.data);
    console.log(event)
    axios({
      method: "post",
      url: "http://localhost:5000/",
      data: {
        name: JSON.stringify(this.state.data.name),
        Token: event
      }
    }).then(function(res) {
      console.log(res);
      window.location.replace("http://localhost:3000/makeProfile");
    });
  };

  render() {
    const responseFacebook = response => {

      const cookies = new Cookies();
      cookies.set("Token", response.accessToken, { path: "/" });
      const token = cookies.get("Token");
  

      this.setState({
        data: response
      });
      console.log(response.accessToken);

      //graph.facebook.com/me?access_token=EAApoh8G4ZBQkBAAkAhJI96mYNlUJFWd145fBl2nmyFBNqwRzi0H301BRvj1obdBt8uzYAQ3mZCDRF6mRim0kCsCITylI2aC2mFUY5myngIgWoH8GHSrQZBYUZCCLigLwZBq7MXmiYZAZBlPZBVjuCdV610ebBUBAlroZCS2JaMv4TGqLu1bID4HpU6aPl0VbXb2MndrZCZCP7hjXgZDZD
      console.log(this.state.data);
      this.handleSubmit(token);
    };

    return (
      <div className="Login">
        <header className="Login--header">
          <p>LOGIN</p>
        </header>
        <FacebookLogin
          appId="2929682047105289"
          fields="name,email,picture"
          icon="fa-facebook"
          callback={responseFacebook}
        />
      </div>
    );
  }
}

export default Login;
