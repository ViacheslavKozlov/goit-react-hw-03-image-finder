import React from "react";
import PropTypes from "prop-types";
import style from "./ImageGallery.module.css";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, onClick }) => {
  return (
    <>
      <ul className={style.ImageGallery}>
        {images.map((image, id) => (
          <ImageGalleryItem onClick={onClick} key={id} image={image} />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func
};

export default ImageGallery;
