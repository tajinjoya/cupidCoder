import React from "react";
import Sppiner from "./Sppiner";
import Avatar from "react-avatar";
import "./matches.css";

const testInfo = ["namenamenamenm", "chachachachacha", "tajintajintajintajin"];
export default class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
    };
  }

  homeRoute() {
    window.location.replace("http://localhost:3000/home");
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/getMatches", {
      credentials: "include"
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
      })
  }

  render() {
    console.log(testInfo);
    //console.log(matchInfo);
    let data;
    if (this.state.loading) {
      data = <Sppiner />;
    } else {
      let matchInfo = this.state.data;
      if(matchInfo.match !== 'none'){
      data = (
        <div className="containerName">
          <div onClick={this.homeRoute}> Click to go back </div>{" "}
          {matchInfo.map(p => {
            return (
              <div className="inlineDiv">
                <Avatar className="matchAvatar" facebookId={p.facebook_id} size="100" round="50px"/>
                <p className="profilePage1"> {p.user_name} </p>
              </div>
            );
          })}
        </div>
      );
        } else {
            data = <div> no matches </div>
        }
    }

    return <div> {data} </div>;
  }
}
