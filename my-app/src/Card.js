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
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

const MyComponent = (props) => {
  console.log('myComponent', props.theData)
  let data = props.theData;
  console.log(data)
  data.map((e)=> console.log('favevoo',e))
  console.log('hi')
  
  return(
    
  <SwipeableViews>
     {data.map(e => {
    return(<div style={Object.assign({}, styles.slide, styles.slide1)}>

      <Avatar facebookId={e.facebook_id} size="150" />
      {e.user_name}

      {e.gender}
    </div>)
     })}
  </SwipeableViews>
 
  )
}

{/* <div style={Object.assign({}, styles.slide, styles.slide2)}>
slide n°2
</div>
<div style={Object.assign({}, styles.slide, styles.slide3)}>
slide n°3
</div> */}
export default Cards;

