import React from "react";
import FacebookLogin from "react-facebook-login";
//import axios from "axios";
import Cookies from "universal-cookie";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  handleSubmit = event => {
    // axios({
    //   method: "post",
    //   url: "http://localhost:5000/",
    //   data: {
    //     name: JSON.stringify(this.state.data.name),
    //     Token: event
    //   }
    // }).then(function(res) {



      window.location.replace("http://localhost:3000/makeProfile");
    //});
  };

  render() {
    const responseFacebook = response => {
      const cookies = new Cookies();
      cookies.set("Token", response.accessToken, { path: "/" });
      cookies.set("userId", response.id, { path: "/" });
      const token = cookies.get("Token");

      this.setState({
        data: response
      });

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
