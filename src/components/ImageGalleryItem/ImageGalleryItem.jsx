import React from 'react';

import PropTypes from 'prop-types';

import './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onImageClick }) => (
  <li onClick={() => onImageClick(image.largeImageURL)}>
    <img src={image.webformatURL} alt={image.tags} />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
