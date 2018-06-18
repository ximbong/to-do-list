import React, { PureComponent } from "react";

import ItemInput from "../ItemInput";
import ItemInfo from "../ItemInfo";
import ItemCheckbox from "../ItemCheckbox";
// import "./index.css";

class Item extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      value: ""
    };
  }

  componentDidMount() {
    this.setState({ value: this.props.data.name });
  }

  componentDidUpdate() {
    if (this.state.value !== this.props.data.name)
      this.setState({ value: this.props.data.name });
  }

  toggleEditState = () => {
    if (!this.props.data.isDone) {
      //done items can't be edited
      this.setState({
        editable: !this.state.editable
      });
    }
  };

  edit = event => {
    //editeable state is always true at this point
    this.setState({ value: event.target.value });
  };

  delete = index => {
    this.props.deleteData(index);
  };

  handleClassName = () => {
    return this.props.data.isDone ? "content done" : "content";
  };

  updateStatus = (event, index) => {
    const isDone = event.target.checked;
    const data = {
      name: this.state.value,
      isDone: isDone
    };

    this.props.updateData(data, index);
  };

  updateData = (event, index) => {
    const name = event.target.value;
    const data = {
      name: name,
      isDone: false
    };

    this.toggleEditState();
    this.props.updateData(data, index);
  };

  render() {
    const index = this.props.index;
    const checked = this.props.data.isDone; //item checked = done
    const { value, editable } = this.state;

    return (
      <div className="item">
        {editable ? (
          <ItemInput
            index={index}
            updateData={this.updateData}
            edit={this.edit}
            value={value}
          />
        ) : (
          <React.Fragment>
            <ItemCheckbox
              updateStatus={this.updateStatus}
              index={index}
              checked={checked}
            />
            <ItemInfo
              handleClassName={this.handleClassName}
              toggleEditState={this.toggleEditState}
              value={value}
            />
          </React.Fragment>
        )}

        <i
          className="far fa-trash-alt delete"
          onClick={() => this.delete(index)}
        />
      </div>
    );
  }
}

export default Item;
