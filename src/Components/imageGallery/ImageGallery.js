// 23294543-72cf202e86e11bc05e525db7a
// https://pixabay.com/api/?q=что_искать&page=1&key=23294543-72cf202e86e11bc05e525db7a&image_type=photo&orientation=horizontal&per_page=12
import React from "react";
import PropTypes from "prop-types";
import style from "./ImageGallery.module.css";

// import { getImages } from "../../API/Api";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, onClick }) => {
  return (
    <>
      <ul className={style.ImageGallery}>
        {images.map((image, id) => (
          <ImageGalleryItem onClick={() => onClick(image)} key={id} image={image} />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func
};

export default ImageGallery;
