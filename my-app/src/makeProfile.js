import React from "react";
import Select from "react-select";

const options = [
  { value2: "gender", value: "Male", label: "Male" },
  { value2: "gender", value: "Female", label: "Female" },
  { value2: "gender", value: "Programmer", label: "Programmer" }
];

const options2 = [
  { value2: "tabspace", value: "tabs", label: "tabs" },
  { value2: "tabspace", value: "spaces", label: "spaces" }
];

const options3 = [
  { value: "Javascript", label: "Javascript" },
  { value: "Ruby", label: "Ruby" },
  { value: "Typescript", label: "Typescript" },
  { value: "Python", label: "Python" },
  { value: "Java", label: "Java" },
];

class Gender extends React.Component {
  state = {
    gender: null,
    tabs: null,
    languages: "",
    bio: null
  };
  handleChange = selectedOption => {
    if (selectedOption.value2 === "gender")  this.setState({ gender: selectedOption.label });
    if (selectedOption.value2 === "tabspace") this.setState({ tabs: selectedOption.value });
  };
  languageChange = selectedOption => {
    let obj = [...selectedOption];
    this.setState({ languages : obj })
  };
  render() {
    const { gender: selectedOption, tabs: selectedOption2, languages: selectedOption3 } = this.state;
    console.log(this.state);
    return (
      <div>
        <h4>Gender</h4>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          placeholder={this.state.gender}
        />
        <h4>Tabs or spaces</h4>
        <Select
          value={selectedOption2}
          onChange={this.handleChange}
          options={options2}
          placeholder={this.state.tabs}
        />
        <h4>Languages</h4>
        <Select
          isMulti
          value={selectedOption3}
          onChange={this.languageChange}
          options={options3}
          placeholder={this.state.languages}
        />
      </div>
    );
  }
}

export default Gender;
