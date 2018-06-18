import React, { Component } from "react";

class DisplayModeButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_id: "all"
    };
  }

  changeID(event) {
    const value = event.target.value;

    this.setState({ selected_id: value });
    this.props.handleFilter(value);
  }

  render() {
    return (
      <div className="buttons">
        <div className="custom-radios">
          <div className="category">
            <input
              type="radio"
              id="all"
              value="all"
              checked={this.state.selected_id === "all"}
              onChange={event => this.changeID(event)}
            />
            <label htmlFor="all">All</label>
          </div>
          <div className="category">
            <input
              type="radio"
              id="active"
              value="active"
              checked={this.state.selected_id === "active"}
              onChange={event => this.changeID(event)}
            />
            <label htmlFor="active">Active</label>
          </div>
          <div className="category">
            <input
              type="radio"
              id="completed"
              value="completed"
              checked={this.state.selected_id === "completed"}
              onChange={event => this.changeID(event)}
            />
            <label htmlFor="completed">Completed</label>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayModeButtons;
