import React, { Component } from 'react'
import { render } from 'react-dom'
import { Card, CardWrapper } from 'react-swipeable-cards';
 
class Cards extends Component {
    
  
 
  onSwipeLeft(data) {
    console.log("I was swiped left.");
  }
 
  onSwipeRight(data) {
    console.log("I was swiped right.");
  }
 
  renderCards() {
    let data = [{id: 1, name: "vidar"},{id: 2, name: "Second"},{id: 2, name: "Second"},{id: 2, name: "Second"},{id: 2, name: "Second"}];
    return data.map((d) => {
      return(
        <Card
          key={d.id}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
          onSwipeRight={this.onSwipeRight.bind(this)}
          data={d}>
            {d.name}
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
