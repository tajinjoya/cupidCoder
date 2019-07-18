import React from "react";
import Avatar from "react-avatar";
import SwipeableViews from 'react-swipeable-views';
//import Cards, { Card } from 'react-swipe-card'

class Cards extends React.Component  {

    
    render () {

      let data = this.props.allData
      console.log('carddata',data)
      return (
        <MyComponent theData={data}></MyComponent>
      )
  }
}

const styles = {
  slide: {
    padding: 15,
    minHeight: 300,
    color: '#fff',
  },
  slide1: {
    background: '#d3d3d3',
  },
};

const MyComponent = (props) => {
  console.log('myComponent', props.theData)
  let data = props.theData;
  console.log(data)
  data.map((e)=> console.log('favevoo',e))
  console.log('hi')
  
  return(
    <div>
      <button onClick={showMatches} > showMatches </button>
  <SwipeableViews>
     {data.map(e => {
    return(<div style={Object.assign({}, styles.slide, styles.slide1)}>

      <Avatar facebookId={e.facebook_id} size="150" />
      <p> Name {e.user_name}</p>
      <p> Tab or Space:  {e.tab}</p>
      <p> Languages:  {e.languages}</p>
      <p> Bio:  {e.bio}</p>
      <button onClick={Like} id={e.facebook_id}> Like </button>
      <button onClick={unLike}> Dislike </button>
      {e.gender}
    </div>)
     })}
  </SwipeableViews>
  </div>
  )
}

const Like = e => {
  console.log(e.id)
  console.log('like')
}

const unLike = e => {
  console.log('DISLIKE')
}

const showMatches = e => {
  console.log('matches')
}

// const Button = (props) => {
// }
export default Cards;

