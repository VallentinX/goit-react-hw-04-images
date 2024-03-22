import React from "react";

import PropTypes from "prop-types";

import "./ImageGallery.module.css";

const ImageGallery = function ({ images, onImageClick }) {
  const uniqueIds = new Set();

  return (
    <ul>
      {images.map((image, i) => {
        if (uniqueIds.has(image.id)) return null;

        uniqueIds.add(image.id);

        return (
          <li key={+image.id + i}>
            <img
              src={image.webformatURL}
              alt={image.alt}
              onClick={() => onImageClick(image.largeImageURL)}
            />
          </li>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
