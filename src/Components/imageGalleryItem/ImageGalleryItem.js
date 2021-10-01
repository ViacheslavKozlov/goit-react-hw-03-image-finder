import React from "react";
import PropTypes from "prop-types";
import style from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ image, onClick }) => {
  const { id, webformatURL, tags } = image;
  return (
    <>
      <li className={style.ImageGalleryItem}>
        <img onClick={onClick} key={id} src={webformatURL} alt={tags} className={style.ImageGalleryItemimage} />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired
};

export default ImageGalleryItem;
