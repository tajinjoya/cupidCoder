import React from "react";
import Cookies from "universal-cookie";
import Cards from './Card';
import Sppiner from './Sppiner'
import './home.css'

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        };

    }

    componentDidMount() {
        const cookies = new Cookies();
        console.log(cookies.get("Token"))
        fetch("http://localhost:5000/api/allmatches", {credentials: 'include'}).then(result => {
            return result.json();
        }).then(res => {
            console.log('res', res)
            setTimeout(() => {
            this.setState({data: res, loading: false});
            }, 1000); console.log('home-data',this.state.data);
        }).catch(e => {
            console.log(e);
        });
    }
    
    goToMessages() {
        window
            .location
            .replace("http://localhost:3000/matches");
    }
    pleaseWork() {
        console.log('link IT');
    }

    render() {

        let data;
        if (this.state.loading) {
                data = <div className="overflowBody">
                <div className="HomeButton"></div>
                <div className="Messages" onClick={this.goToMessages}></div>

                <Sppiner/>
                <div className="homeSpace"></div>
                <div className="likeButton2"></div>
                <div className="dislikeButton2"></div>
                <div className="nextButton2"></div>

            </div>

        } else {
            data = <div className="overflowBody">
                <div className="HomeButton"></div>
                <div className="Messages" onClick={this.goToMessages}></div>
                <Cards allData={this.state.data}/>
                {console.log('hi',this.state.data)}
                <div className="likeButton"></div>
                <div className="dislikeButton"></div>
                <div className="nextButton" src={this.state.data}></div>

            </div>

        }
        return (
            <div className="theBody">
                {data}
            </div>
        );
    }
}
export default home;
