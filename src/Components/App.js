import React, { Component } from "react";
import { getImages } from "../API/Api";
import Spinner from "./loader/Loader";
import SearchBar from "./searchBar/SearchBar";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import Modal from "./modal/Modal";
import style from "./App.module.css";

class App extends Component {
  state = {
    images: [],
    page: 1,
    selectedImage: null,
    searchImage: null,
    status: "idle",
    error: null,
    showModal: false
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchImage, page } = this.state;
    if (prevState.searchImage !== searchImage || prevState.page !== page) {
      try {
        this.setState({ status: "pending" });
        const gallery = await getImages(searchImage, page);
        this.setState({ status: "resolved" });
        if (searchImage.trim() === "" || gallery.length === 0) {
          return console.log(alert(`there r mo images`));
        }
        this.setState({ images: [...this.state.images, ...gallery] });

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth"
        });
      } catch (err) {
        this.setState({ status: "reject" });
        console.log(alert(`this is the end`));
      }
    }
  }

  handleSubmit = searchImage => {
    this.setState({ searchImage: searchImage, page: 1, images: [] });
  };

  handleSelectImg = imageURL => {
    this.setState(prevState => ({ showModal: !prevState.showModal, selectedImage: imageURL }));
  };

  handleloadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, status, showModal, selectedImage } = this.state;
    const showLoadmoreBtn = images.length >= 1;

    return (
      <>
        <div className={style.App}>
          <SearchBar onSubmit={this.handleSubmit} />
          {status === "pending" && <Spinner />}
          <ImageGallery images={images} onSelect={this.handleSelectImg} />
          {showLoadmoreBtn && <Button onClick={this.loadMore} />}
          {showModal && <Modal scr={selectedImage.largeImageURL} alt={selectedImage.tags} />}
        </div>
      </>
    );
  }
}

export default App;
