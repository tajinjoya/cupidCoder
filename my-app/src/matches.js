import React from "react";
import Sppiner from "./Sppiner";
import Avatar from "react-avatar";
import "./matches.css";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,

      name: 'yolo',

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
          loading: false,

          renderId : '',

        });

      })
      .catch(e => {
        console.log(e);
      });
  }

  getProfileInfo(e){


    console.log(e)
    cookies.set("profileId", e, { path: "/" });

  window
  .location
  .replace("http://localhost:3000/getProfile");
}

  render() {
    //   const getProfileInfo = (e) => {
    //     console.log(e.target)
    //   };
    console.log(this.state.data);
    let data;
    if (this.state.loading) {
      data = <Sppiner />;
    } else {
      let matchInfo = this.state.data;
      if (matchInfo.match !== "none") {
        data = (
          <div className="bodyMatcher">
            <div className="containerName">
              <div className="goBackHome" onClick={this.homeRoute}>
                {" "}
              </div>
              <div className="messageIcon"> </div>
              {matchInfo.map((p, index) => {
                return (

                  <div className="inlineDiv" key={index} onClick={this.getProfileInfo.bind(this,
                    p.facebook_id)}>


                    <Avatar
                      facebookId={p.facebook_id}
                      className="matchAvatar"
                      size="102"
                      round="50px"
                    />
                    <div className="profilePage1">
                      <p className="profileName"> {p.user_name}</p>
                      <p className="profileBio">{p.bio} </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      } else {
        data = (
          <div className="containerName">
            <div className="goBackHome" onClick={this.homeRoute}>
              {" "}
            </div>
            <div className="messageIcon"> </div>
            <div className="noMatchesSad"> No matches :(</div>
          </div>
        );
      }
    }

    return <div> {data} </div>;
  }
}

