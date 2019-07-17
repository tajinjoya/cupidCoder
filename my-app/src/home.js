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
      .then(result => {
        console.log("fetch source");
        console.log(result);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return <p> hi </p>;
  }
}
export default home;
