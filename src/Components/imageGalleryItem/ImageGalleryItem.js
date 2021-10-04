import React from "react";
import PropTypes from "prop-types";
import style from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ image, onClick }) => {
  const { id, webformatURL, largeImageURL, tags } = image;
  const largeImg = () => {
    onClick(largeImageURL);
  };
  return (
    <>
      <li className={style.ImageGalleryItem}>
        <img onClick={largeImg} key={id} src={webformatURL} alt={tags} className={style.ImageGalleryItemimage} />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired
};

export default ImageGalleryItem;
