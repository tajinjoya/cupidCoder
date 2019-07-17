import React from "react";
// import Cookies from "universal-cookie";

class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    console.log("hihi");
    fetch("http://localhost:5000/api/allmatches")
      .then(result => { return result.json()
      })
      .then(res => {
          console.log(res)
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return(
    <div>
      <p> {this.state.data}</p>
    </div>
    )
  }
}
export default home;
