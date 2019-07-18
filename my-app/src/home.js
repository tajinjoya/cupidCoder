import React from "react";
import Cookies from "universal-cookie";
import Card from './Card';
class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        const cookies = new Cookies();
        console.log(cookies.get("Token"))
        fetch("http://localhost:5000/api/allmatches", {credentials: 'include'}).then(result => {
            return result.json();
        }).then(res => {

            this.setState({data: res});
            console.log('home-data',this.state.data);
        }).catch(e => {
            console.log(e);
        });

    }

    render() {
        return (
            <div>
              <Card allData={this.state.data} />
            </div>
        );
    }
}
export default home;

