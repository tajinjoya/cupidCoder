import React from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';

// function Login() {

// //   window.FB.getLoginStatus(function(response) {
// //     statusChangeCallback(response);
// // });

//   return (
//     <div className="Login">
//       <header className="Login--header">
//         <p>LOGIN</p>
//       </header>
//       <FacebookLogin 
//         appId="2929682047105289" 
//         fields="name,email,picture"
//         icon="fa-facebook" 
//         callback={responseFacebook} />
//     </div>
//   );
// }

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data : ''
        }
    }
  
    handleSubmit = event => {
        console.log("cometo here")
        console.log(this.state.data)
      
        axios({
          method: 'post',
          url: 'http://localhost:5000/',
          data: {
              "name" : JSON.stringify(this.state.data.name),
          }
        }).then(function (res) {

          console.log(res);
            //window.location.replace("http://localhost:3000/makeProfile");


          
      });
      }
  
    render() {

        const responseFacebook = response => {

            this.setState({
                data : response
              });

              console.log('sdsfg')
           console.log(this.state.data)
           this.handleSubmit();
          }
       
        return (
            <div className="Login">
                   <header className="Login--header">
                    <p>LOGIN</p>
                   </header>
                   <FacebookLogin 
                    appId="2929682047105289" 
                    fields="name,email,picture"
                    icon="fa-facebook" 
                    callback={responseFacebook} />
             </div>
        );
      
    }
  }



export default Login;