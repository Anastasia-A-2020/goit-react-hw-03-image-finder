import React, { Component } from "react";
import s from "./Searchbar.module.css";

export default class Searchbar extends Component {
  state = {
    imageName: "",
  };

  handleImageNameChange = (e) => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.imageName.trim() === "") {
      console.log("error");
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: "" });
  };

  render() {
    return (
      <div>
        <header className={s.Searchbar}>
          <form onSubmit={this.handleFormSubmit} className={s.SearchForm}>
            <button type="submit" className={s.SearchFormButton}>
              <span className={s.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              className={s.SearchFormInput}
              type="text"
              name="imageName"
              value={this.state.imageName}
              onChange={this.handleImageNameChange}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}
