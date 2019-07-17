import React from "react";
import axios from "axios"
import Cookies from "universal-cookie";

class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const cookies = new Cookies();
    console.log(cookies.get("Token"))
    fetch("http://localhost:5000/api/allmatches",  { credentials: 'include' } )
      .then(result => {
        return result.json();
      })
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
//     axios({
//         method: "post",
//         url: "http://localhost:5000/api/loginInfoNewUser",
//         data: {
//           name: JSON.stringify(this.state),
//           Token: token,
//           id : id
//         }
//       }).then(res => {
//         window.location.replace("http://localhost:3000/home");
//       });
 }

  render() {
    return (
      <div>
        <p> {this.state.data}</p>
      </div>
    );
  }
}
export default home;
