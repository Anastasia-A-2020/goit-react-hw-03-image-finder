import React, { Component } from "react";
import fetchImages from "./services";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
// // import ImageGalleryItem from "./components/ImageGalleryItem";
// import "./App.css";

class App extends Component {
  state = {
    imageName: null,
    images: [],
    page: 1,
    reqStatus: "idle",
  };

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      const images = await fetchImages(this.state.imageName);
      this.setState({ images });
    }
  }
  render() {
    return (
      <div>
        <Searchbar onFormSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}

export default App;
