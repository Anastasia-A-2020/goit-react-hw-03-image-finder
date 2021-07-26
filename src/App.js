import React, { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import fetchImages from "./services";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Spinner from "./components/Loader";
import Button from "./components/Button";

class App extends Component {
  state = {
    imageName: null,
    images: [],
    page: 1,
    reqStatus: "idle",
  };

  handleFormSubmit = (imageName) => {
    this.setState({ imageName, images: [], page: 1 });
  };

  async componentDidUpdate(_, prevState) {
    const { imageName, images, page } = this.state;

    if (
      prevState.imageName !== this.state.imageName ||
      prevState.page !== this.state.page
    ) {
      const notify = () =>
        toast.error("No results were found for your search.", {
          duration: 3000,
          position: "top-right",
        });

      try {
        this.setState({
          reqStatus: "loading",
        });
        const fetchImagesArray = await fetchImages(imageName, page);

        if (fetchImagesArray.length === 0) {
          return notify();
        }

        const newImagesArray = [...images, ...fetchImagesArray];

        this.setState({
          images: newImagesArray,
          reqStatus: "idle",
        });

        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      } catch (error) {
        notify();

        this.setState({
          reqStatus: "rejected",
        });
      }
    }
  }

  onLoadButton = () => {
    this.setState((prevState) => {
      console.log(prevState.page);
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { images, reqStatus } = this.state;
    const fillArray = reqStatus === "idle" && images.length > 0;
    const currentStatus = reqStatus === "loading";

    return (
      <div>
        <Searchbar onFormSubmit={this.handleFormSubmit} />
        <Toaster />
        {currentStatus && <Spinner />}
        <ImageGallery images={images} />
        {fillArray && <Button onLoadButton={this.onLoadButton} />}
      </div>
    );
  }
}

export default App;
