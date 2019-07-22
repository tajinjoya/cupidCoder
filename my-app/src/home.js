import React from "react";
import Cookies from "universal-cookie";
import Cards from './Card';
import Sppiner from './Sppiner'

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading:true
        };

    }

    componentDidMount() {
        const cookies = new Cookies();
        console.log(cookies.get("Token"))
        fetch("http://localhost:5000/api/allmatches", {credentials: 'include'}).then(result => {

                return result.json();
        }).then(res => {
            setTimeout(() => {
                this.setState({data: res, loading:false});
            }, 3500);
            //console.log('home-data',this.state.data);
        }).catch(e => {
            console.log(e);
        });

    }

    render() {
        let data;
        if(this.state.loading){
            data= <Sppiner/>

        }else{
            data= <Cards allData={this.state.data}/>

        }
        return (
            <div>
               {data}
            </div>
        );
    }
}
export default home;
