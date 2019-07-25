import React from "react";
import Select from "react-select";
import axios from "axios";
import Cookies from "universal-cookie";
import './makeProfile.css';

const genderOptions = [
    {
        value: "Male",
        label: "Male"
    }, {
        value: "Female",
        label: "Female"
    }, {
        value: "Programmer",
        label: "Programmer"
    }
];

const tabsOptions = [
    {
        value: "Tabs",
        label: "Tabs"
    }, {
        value: "Spaces",
        label: "Spaces"
    }
];

const languageOptions = [
    {
        value: "Javascript",
        label: "Javascript"
    }, {
        value: "Ruby",
        label: "Ruby"
    }, {
        value: "Typescript",
        label: "Typescript"
    }, {
        value: "Python",
        label: "Python"
    },
    {
        value: "PHP",
        label: "PHP"
    },
    {
        value: "Java",
        label: "Java"
    },
    {
        value: "SQL",
        label: "SQL"    
    },
    {
        value: "Swift",
        label: "Swift"    
    }
    , {
        value: "Cplus",
        label: "C++"
    }
    
    , {
        value: "cshop",
        label: "C#"
    }
    
];

class Gender extends React.Component {
    state = {
        gender: null,
        tabs: null,
        languages: "",
        bio: null, 
        gitHub: null, 
    };

    handleGenderChange = selectedOption => {
        this.setState({gender: selectedOption.label});
    };

    handleTabsChange = selectedOption => {
        this.setState({tabs: selectedOption.value});
    };
    
    handleLanguageChange = selectedOption => {
        let obj = [...selectedOption];
        this.setState({languages: obj});
    };

    handleBioChange = event => {
        this.setState({bio: event.target.value});
    };

    handleGitHubChange = event => {
        this.setState({gitHub: event.target.value});
    };


    submitData = () => {
        const cookies = new Cookies();
        const token = cookies.get("Token");
        const id = cookies.get("userId");
        const latitude = cookies.get("latitude");
        const longitude = cookies.get("longitude");
        const facebookName = cookies.get("name");
console.log('check cookies', latitude,longitude);

        axios({
            method: "post",
            url: "http://localhost:5000/api/loginInfoNewUser",
            data: {
                userInfo: JSON.stringify(this.state),
                Token: token,
                id: id,
                Latitude:latitude,
                Longitude:longitude,
                facebookName:facebookName
            }
        }).then(res => {
            window
                .location
                .replace("http://localhost:3000/home");
        });
    };

    render() {
        const {
            gender: selectedGenderOption, 
            tabs: selectedTabsOption, 
            languages: selectedLanguageOptions, 
            bio: selectedBioOption,
            gitHub: selectedGitHubOption,
        } = this.state;
        return (
            <div className='root'>
                <h4>Gender</h4>

                <Select
                    value={selectedGenderOption}
                    onChange={this.handleGenderChange}
                    options={genderOptions}
                    placeholder={this.state.gender}/>
                <h4>Tabs or spaces</h4>

                <Select
                    value={selectedTabsOption}
                    onChange={this.handleTabsChange}
                      options={tabsOptions}
                    placeholder={this.state.tabs}/>
                <h4>Languages</h4>

                <Select
                    isMulti
                    value={selectedLanguageOptions}
                    onChange={this.handleLanguageChange}
                    options={languageOptions}
                    placeholder={this.state.languages}/>

               <h4 className='label'>Bio</h4>
                <textarea
                    rows={this.state.rows}
                    value={selectedBioOption}
                    placeholder={'Enter your text here...'}
                    className='textareaProfile'
                    onChange={this.handleBioChange.bind(this)}/>

                <h4 className='label'>GitHub URL</h4>
                <textarea
                    rows={this.state.rows}
                    value={selectedGitHubOption}
                    placeholder={'Enter your URL here...'}
                    className='gitHubURL'
                    onChange={this.handleGitHubChange.bind(this)}/>

                <span className="spanProfile">
                    <button onClick={this.submitData}>Continue</button>
                </span>

            </div>
        );
    }
}

export default Gender;
