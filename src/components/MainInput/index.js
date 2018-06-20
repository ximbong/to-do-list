import React, { Component } from "react";

import "./index.css";

class MainInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const name = this.state.value;

    if (!name) {
      alert("No empty input please!");
    } else {
      const date = new Date();
      const uniqueID = date.getTime(); //generate uniqueID from time
      const data = {
        name: name,
        isDone: false,
        uniqueID: uniqueID
      };
      this.props.addData(data);
      this.setState({
        value: ""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} onBlur={this.handleSubmit}>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          type="text"
          placeholder="What needs to be done?"
        />
      </form>
    );
  }
}

export default MainInput;
