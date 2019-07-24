import React, {Component} from "react";

export default class playerProfile extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        data: this.props.allData,
        open: false,
  
      };
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/getProfile", {
          credentials: "include"
        })
          .then(result => {
            return result.json();
          })
          .then(res => {
            console.log(res);
            this.setState({
              data: res,
              loading: false
            });
          })
          .catch(e => {
            console.log(e);
          });
      }

      render() {
          return (<p> no </p>)
      }
}