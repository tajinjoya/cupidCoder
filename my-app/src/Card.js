import React, {Component} from "react";
import {Card, CardWrapper} from "react-swipeable-cards";
import Avatar from "react-avatar";
import Cookies from "universal-cookie";
import './card.css';
import axios from 'axios';
import Popup from "reactjs-popup";


const cookies = new Cookies();
class Cards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.allData,
      open: false,
      name: '',

    };

    this.openModal = this
      .openModal
      .bind(this);
    this.closeModal = this
      .closeModal
      .bind(this);
  }

  onSwipeLeft(d) {
    console.log("Don't like");
    console.log('test d', d);

  }

  onSwipeRight(likedUser) {

    // submitData(d);
    const likedUserId = likedUser.id;
    const token = cookies.get("Token");
    const UserId = cookies.get("userId");
    axios({
      method: "post",
      url: "http://localhost:5000/api/checkMatch",
      data: {
        Token: token,
        UserId: UserId,
        likedUser: likedUserId
      }
    }).then(res => {

     if(res.data === 'Matched'){
      console.log(res.data, 'we are in')
      this.openModal(likedUser.user_name);
     }
     console.log(res.data)

    });
    
  }

  openModal(userName) {
    console.log(userName)
    this.setState({open: true, name : userName});
  }
  closeModal() {
    this.setState({open: false});
  }


  renderCards() {

    let data = this.props.allData;
    return data.map(d => {
      
      return (
        <Card
          key={d.id}
          onSwipeLeft={this
          .onSwipeLeft
          .bind(this)}
          onSwipeRight={this
          .onSwipeRight
          .bind(this)}
          data={d}>
          <div className="pleaseDont"  onClick={this.pleaseWork}>
            <Avatar facebookId={d.facebook_id} size="330" round="5px"/>
            <h3 className="userName">{d.user_name}<div className={d.gender}></div><div className={d.tab}></div></h3>
            <div className="aDIV">
              
              <ul className="languagesDisplay">
              {console.log('languages', d.languages.split(','))}
              {d.languages.split(',').map((keyName, i) => (
                
              <div className={keyName}>
              </div>
                ))}
              
              </ul>

              <p className="languages" > <div className="location"></div>{d.distanceFromPlayerOne}
              </p>
            </div>
          </div>
​         
        </Card>
      );
    });
  }
  render() {
    return (

      <div className="cardBody">
        <div className="picture"></div>
        <CardWrapper>{this.renderCards()}</CardWrapper>
        
        <Popup className="popupClass" open={this.state.open} closeOnDocumentClick onClose={this.closeModal}>
          <  div className="popup">
            <div className="matchFound">
             <p className="wtMatch">
              Wow! what a match!
               </p> 
            
            <div className="restText">
              <p>You and </p>
              <p>{this.state.name}</p>
              <p>have liked each other!</p>
              <div className="heartGif">
              {/* <img src={logo} alt="loading..." /> */}
              <img className="gif"src="https://media.giphy.com/media/3WuYqcEnVxoYVyrMVM/giphy.gif" alt="no"></img>
              </div>
            </div>
            </div>
            
            
            <span className="matchButton"><button className="buttonText"onClick={this.closeModal}>
              Keep swiping!
            </button>
            </span>
          </div>
        </Popup>
​
      </div>
    );
  }
}
export default Cards;