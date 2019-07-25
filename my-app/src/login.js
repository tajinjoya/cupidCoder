import React from "react";
import FacebookLogin from "react-facebook-login";
import Cookies from "universal-cookie";
import styled from "styled-components";
import cupid from "./images/cupid.png";
import "./login.css";
//geo info
import { geolocated } from "react-geolocated";

const Wrapper = styled.section`
  padding: 4em;
  font-size: 1.5em;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% 100%, #ff4545, #ffb997);
  font-size: 2em;
`;
const Content = styled.div`
  background-image: url(${cupid});
  width: 70px;
  height: 65px;
  background-repeat: no-repeat;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      exist: "false"
    };
  }
  handleSubmit = event => {
    fetch("http://localhost:5000/api/checkAccount", { credentials: "include" })
      .then(result => {
        return result.json();
      })
      .then(res => {
        console.log("hello");
        console.log(res);
        if (res.exist === "true") {
          window.location.replace("http://localhost:3000/home");
        } else {
          window.location.replace("http://localhost:3000/makeProfile");
        }
      })
      .catch(e => {
        console.log(e);
      });
    console.log("no");
  };

  render() {
    const cookies = new Cookies();
    const responseFacebook = response => {
      cookies.set("name", response.name, { path: "/" });
      cookies.set("Token", response.accessToken, { path: "/" });
      cookies.set("userId", response.id, { path: "/" });
      const token = cookies.get("Token");

      this.setState({ data: response });

      this.handleSubmit(token);
    };

    //Get geo location
    const geo = () => {
      if (this.props.isGeolocationAvailable) {
        if (this.props.isGeolocationEnabled) {
          if (this.props.coords) {
            cookies.set("latitude", this.props.coords.latitude);
            cookies.set("longitude", this.props.coords.longitude);
          }
        }
      }
    };


        const coder = '<Cupid Coder/>'
        const h1 = '<h1>  ';
        const h11 = '  </h1> ';
        return (
            <Wrapper>
                <Content/>
                <p className='font'>{coder}</p>
                <p className='font2'>{h1}Dating app for programmers{h11}</p>
                {geo()}
                <FacebookLogin
                    cssClass="btnFacebook"
                    appId="2929682047105289"
                    fields="name,email,picture"
                    icon="fa-facebook"
                    callback={responseFacebook}/>
                <p className='font3'>By logging in, you agree to our Terms and Privacy Policy</p>
            </Wrapper>

        );
    }

}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Login);
