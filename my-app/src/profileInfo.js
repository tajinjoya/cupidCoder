import React, { Component } from "react";
import Avatar from "react-avatar";
import Sppiner from "./Sppiner";
import "./profileInfo.css";
import { Chat, addResponseMessage } from "react-chat-popup";


export default class playerProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      open: false,
      loading: true
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/getProfile", {
      credentials: "include"
    })
      .then(result => {
        return result.json();
      })
      .then(res => {
        this.setState({
          data: res,
          loading: false,
      })
    })
      .catch(e => {
        console.log(e);
      });

      fetch("http://localhost:5000/api/getMessages", {
        credentials: "include"
    }).then(result => {
        return result.json()
    }).then( res => {
        console.log(res.info)
        let arr = res.info;
        arr = arr.split('/');
        console.log(arr)
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i])
            if(arr[i] !== "undefined") addResponseMessage(`${arr[i]}`);
        }
    })
    
   // addUserMessage("NO");

   // addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API

    fetch("http://localhost:5000/api/inputMessage", {
        credentials: "include",
        method: 'POST'
      })
        .then(result => {
          return result.json();
        })
        .then(res => {
          console.log(res);

          this.setState({
            data: res,
            loading: false
          });
        })
        .catch(e => {
          console.log(e);
        });
  };
  homeRoute() {
      
          window.location.replace("http://localhost:3000/home");
  }
  goToMessages() {
    window.location.replace("http://localhost:3000/matches");
  }

  render() {
    let data;
    if (this.state.loading) {
      data = <Sppiner />;
    } else {

      data = (
        <div className="bodyMatcher">
          <div className="containerName">
            <div className="goBackHome" onClick={this.homeRoute} />
            <div className="messageIcon" onClick={this.goToMessages}>
              {" "}
            </div>
            <Chat
              handleNewUserMessage={this.handleNewUserMessage}
              title={"chatting with " + this.state.data[0].user_name}
              subtitle="And my cool subtitle"
              fullScreenMode={false}
            />
            <div className="tempAvatar">
              <Avatar
                facebookId={this.state.data[0].facebook_id}
                size="330"
                round="7px"
              />

              <h3 className="userName">
                {this.state.data[0].user_name}
                <div className={this.state.data[0].gender} />
                <div className={this.state.data[0].tab} />
              </h3>
              <ul className="languagesDisplay languagesDisplayTwo">
                {console.log("languages", this.state.data[0].languages.split(","))}
                {this.state.data[0].languages.split(",").map((keyName, i) => (
                  <div className={keyName} key={Math.random()}/>
                ))}
              </ul>
                    
              <p className="profileBio profileBioTwo">{this.state.data[0].bio} </p>
            </div>
          </div>
        </div>
      );
    }
    return <div>{data}</div>;
  }
}

