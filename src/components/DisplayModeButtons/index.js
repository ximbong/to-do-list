import React, { Component } from "react";
import FooterRadioButton from "../FooterRadioButton";

class DisplayModeButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_id: "all"
    };
  }

  changeID = event => {
    const value = event.target.value;

    this.setState({ selected_id: value });
    this.props.handleFilter(value);
  };

  render() {
    return (
      <div className="buttons">
        <div className="custom-radios">
          <FooterRadioButton
            id="all"
            changeID={this.changeID}
            selected_id={this.state.selected_id}
          />
          <FooterRadioButton
            id="active"
            changeID={this.changeID}
            selected_id={this.state.selected_id}
          />
          <FooterRadioButton
            id="completed"
            changeID={this.changeID}
            selected_id={this.state.selected_id}
          />
        </div>
      </div>
    );
  }
}

export default DisplayModeButtons;
