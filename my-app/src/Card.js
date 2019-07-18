import React, { Component } from 'react'
import { Card, CardWrapper } from 'react-swipeable-cards';
import Avatar from 'react-avatar';

class Cards extends Component {
    

 
  onSwipeLeft(data) {
    console.log("I was swiped left.",data);
  }
 
  onSwipeRight(data) {
    console.log("I was swiped right.",data);
  }
 
  renderCards() {
    let data = this.props.allData;
    console.log('card-data', data[0]);
    return data.map((d) => {
      return(
        <Card
          key={d.user_name}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
          onSwipeRight={this.onSwipeRight.bind(this)}
          data={d}>
            {d.user_name}
            {d.gender}
            <Avatar facebookId={d.facebook_id} round={true}  size="150" />

        </Card>
      );
    });
  }
 
  render() {
    return(
      <CardWrapper>
        {this.renderCards()}
      </CardWrapper>
    );
  }
}

export default Cards;
