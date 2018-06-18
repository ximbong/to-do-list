import React, { Component } from "react";

import Title from "./components/Title";
import Input from "./components/Input";
import Item from "./components/Item";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  addData = newValue => {
    this.setState({
      data: [...this.state.data, newValue]
    });
  };

  updateData = (data, index) => {
    const proxy = [...this.state.data];
    proxy[index] = data;

    this.setState({
      data: proxy
    });
  };

  render() {
    const ItemList = this.state.data.map((e, i) => (
      <Item data={e} index={i} key={i} updateData={this.updateData} />
    ));
    console.log(this.state.data);
    return (
      <div className="wrapper">
        <Title />
        <div className="container">
          <Input addData={this.addData} />
          {ItemList}
        </div>
      </div>
    );
  }
}

export default App;
