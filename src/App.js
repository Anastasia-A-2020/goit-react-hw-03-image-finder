import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import "./App.css";

class App extends Component {
  state = {
    image: "",
  };

  handleSearchFormSubmit = (imageName) => {
    this.setState({ image: imageName });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
      </div>
    );
  }
}

export default App;
