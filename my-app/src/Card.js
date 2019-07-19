import React, { Component } from "react";
import { Card, CardWrapper } from "react-swipeable-cards";
import Avatar from "react-avatar";
import Cookies from "universal-cookie";
import './card.css'
const cookies = new Cookies();
class Cards extends Component {

  state = {
    data : this.props.allData
  }

  // submitData = (e) => {
  //   const cookies = new Cookies();
  //   const token = cookies.get("Token");
  //   const id = cookies.get("userId");

  //   axios({
  //       method: "post",
  //       url: "http://localhost:5000/api/pandingMatch",
  //       data: {
  //           name: JSON.stringify(this.state),
  //           Token: token,
  //           id: id,
  //           liked:e
  //       }
  //   }).then(res => {
        // window.location.replace("http://localhost:3000/home");
  //   });
  // };

  onSwipeLeft(d) {
    console.log("Don't like");
    const token = cookies.get("Token");
    const id = cookies.get("userId");
    console.log('test d', d);

  }

  onSwipeRight(d) {
    // submitData(d);
    console.log("Like");
    const token = cookies.get("Token");
    const id = cookies.get("userId");
    console.log('test d', d);
  }

  renderCards() {
    let data = this.props.allData;
    return data.map(d => {
      return (
        <Card
          
          key={d.id}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
          onSwipeRight={this.onSwipeRight.bind(this)}
          data={d}
        >
          <div className="pleaseDont">
          <Avatar facebookId={d.facebook_id} size="250" round="10px" />
          <h3 className="userName">{d.user_name}</h3>
          <div className="aDIV">
          <ul>
          <li className="gender">Gender: {d.gender} </li> 
          <li className="tabs">T&S: {d.tab} </li>
          </ul>
          <p className="languages">languages: {d.languages} </p>
          <p className="bio">{d.bio}</p> 
          </div>
          </div>
        </Card>
      );
    });
  }
  render() {
    return (
      <div className="cardBody">
        <div className="picture"></div>
        <CardWrapper>{this.renderCards()}</CardWrapper>
      </div>
    );
  }
}
export default Cards;