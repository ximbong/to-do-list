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

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("data"));

    this.setState({
      data: data
    });
  }

  componentDidUpdate() {
    localStorage.setItem("data", JSON.stringify(this.state.data));
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
      return array.filter(element => !element.props.data.isDone); //not done = active items
    } else {
      return array.filter(element => element.props.data.isDone); //done = completed items
    }
  };

  markAllDone = () => {
    const newData = this.state.data.map(e => {
      const sources = [
        { name: e.name },
        { isDone: true },
        { uniqueID: e.uniqueID }
      ];
      return Object.assign.apply(Object, [{}].concat(sources));
    });

    this.setState({
      data: newData
    });
  };

  clearCompleted = () => {
    const newData = this.state.data.filter(e => !e.isDone);

    this.setState({
      data: newData
    });
  };

  render() {
    const { data, category } = this.state;
    const showFooter = this.state.data.length > 0; //show footer if data isn't empty

    const ItemList = data.map((e, i) => (
      <Item
        data={e}
        index={i}
        key={e.uniqueID}
        updateData={this.updateData}
        deleteData={this.deleteData}
      />
    ));

    const DisplayItems = this.filter(ItemList, category); //displayData based on filter
    const activeItemsLength = this.filter(ItemList, "active").length;

    return (
      <div className="wrapper">
        <Title />
        <div className="container">
          <MainInput addData={this.addData} />
          {DisplayItems}
          {showFooter && (
            <Footer
              length={activeItemsLength}
              handleFilter={this.handleFilter}
              markAllDone={this.markAllDone}
              clearCompleted={this.clearCompleted}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
