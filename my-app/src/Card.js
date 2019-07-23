import React, {Component} from "react";
import {Card, CardWrapper} from "react-swipeable-cards";
import Avatar from "react-avatar";
import Cookies from "universal-cookie";
import './card.css'
import axios from 'axios'
import Popup from "reactjs-popup";

const cookies = new Cookies();
class Cards extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.allData,
            open: false
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
        // const token = cookies.get("Token");
        // const id = cookies.get("userId");
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
            this.openModal();
          }
          console.log(res.data)

        });
        
    }

    openModal() {
        this.setState({open: true});
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
                    <div className="pleaseDont">
                        <Avatar facebookId={d.facebook_id} size="250" round="10px"/>
                        <h3 className="userName">{d.user_name}</h3>
                        <div className="aDIV">
                            <ul>
                                <li className="gender">Gender: {d.gender}
                                </li>
                                <li className="tabs">T&S: {d.tab}
                                </li>
                            </ul>
                            <p className="languages">languages: {d.languages}
                            </p>
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
                
                <Popup className="popupClass" open={this.state.open} closeOnDocumentClick onClose={this.closeModal}>
                    <div className="popup">
                        <p>
                            hello hello
                        </p>
                        <button onClick={this.closeModal}>
                            OK
                        </button>
                    </div>
                </Popup>

            </div>
        );
    }
}
export default Cards;