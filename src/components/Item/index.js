import React, { Component } from "react";

// import "./index.css";

class Item extends Component {
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

  handleEditState = () => {
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
    console.log(index);
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

    this.handleEditState();
    this.props.updateData(data, index);
  };

  render() {
    const isDone = this.props.data.isDone;
    const index = this.props.index;
    const { value, editable } = this.state;

    return (
      <div className="item">
        {!editable && (
          <label className="label">
            <input
              type="checkbox"
              onChange={event => this.updateStatus(event, index)}
            />
            <span className="checkmark" />
          </label>
        )}

        {editable ? (
          <input
            value={value}
            onBlur={event => this.updateData(event, index)}
            onChange={this.edit}
            className="content"
            type="text"
            autoFocus
          />
        ) : (
          <div
            className={this.handleClassName()}
            onClick={this.handleEditState}
          >
            {value}
          </div>
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
