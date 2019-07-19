import React from "react";
import FacebookLogin from "react-facebook-login";
import Cookies from "universal-cookie";
import styled from 'styled-components'
import cupid from './images/cupid.png';
import './login.css';


const Wrapper = styled.section `
  padding: 4em;
  font-size: 1.5em;
  color:white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 9% 100%, #ff4545, #f98b60);
  font-size: 2em;
`;
const Content = styled.div `
    background-image: url(${cupid});
    width: 70px;
    height: 65px;
    background-repeat: no-repeat;

    `

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }
    handleSubmit = event => {
        window
            .location
            .replace("http://localhost:3000/makeProfile");
    };

    render() {
        const responseFacebook = response => {
            console.log(response)
            const cookies = new Cookies();
            cookies.set("Token", response.accessToken, {path: "/"});
            cookies.set("userId", response.id, {path: "/"});
            const token = cookies.get("Token");

            this.setState({data: response});

            this.handleSubmit(token);
        };
        const coder = '<Coder/>'
        const h1 = '<h1>  ';
        const h11 = '  </h1> ';
        return (
            <Wrapper>
                <Content/>
                <p className='font'>Cupid{coder}</p>
                <p className='font2'>{h1}Dating app for programmers{h11}</p>

                <FacebookLogin
                    cssClass="btnFacebook"
                    appId="2728189017209232"
                    fields="name,email,picture"
                    icon="fa-facebook"
                    callback={responseFacebook}/>
                <p className='font3'>By logging in, you agree to our Terms and Privacy Policy</p>
            </Wrapper>

        );
    }
}

export default Login;
