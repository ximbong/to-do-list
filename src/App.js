import React, { Component } from "react";

import Title from "./components/Title";
import MainInput from "./components/MainInput";
import Item from "./components/Item";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "all"
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

  deleteData = index => {
    const proxy = [...this.state.data];
    proxy.splice(index, 1);

    this.setState({
      data: proxy
    });
  };

  handleFilter = category => {
    this.setState({
      category: category
    });
  };

  filter = (array, category) => {
    if (category === "all") return array;
    if (category === "active") {
      return array.filter(element => !element.isDone); //not done = active items
    } else {
      return array.filter(element => element.isDone); //done = completed items
    }
  };

  render() {
    const { data, category } = this.state;

    const showFooter = this.state.data.length > 0; //show footer if data isn't empty
    const displayData = this.filter(data, category); //displayData based on filter
    const activeItemsLength = this.filter(data, "active").length; //number of incompleted items

    const ItemList = displayData.map((e, i) => (
      <Item
        data={e}
        index={i}
        key={i}
        updateData={this.updateData}
        deleteData={this.deleteData}
      />
    ));

    return (
      <div className="wrapper">
        <Title />
        <div className="container">
          <MainInput addData={this.addData} />
          {ItemList}
          {showFooter && (
            <Footer
              length={activeItemsLength}
              handleFilter={this.handleFilter}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
