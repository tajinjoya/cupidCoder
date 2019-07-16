import React from "react";
import Select from "react-select";

const options = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Programmer", label: "Programmer" }
];

const options2 = [
  { value: "tabs", label: "tabs" },
  { value: "spaces", label: "spaces" }
];

class Gender extends React.Component {
  state = {
    gender: null,
    tabs: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { gender: selectedOption, tabs: selectedOption2 } = this.state;

    return (
      <div>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />

        <Select
          value={selectedOption2}
          onChange={this.handleChange}
          options={options2}
        />
      </div>
    );
  }
}

export default Gender;
