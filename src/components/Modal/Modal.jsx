import React, { Component } from 'react';

import PropTypes from 'prop-types';

import styles from './Modal.module.css';

class Modal extends Component {
  addKeyEvent() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  removwKeyEventt() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, alt } = this.props;

    return (
      <div className={styles.Overlay} onClick={this.handleOverlayClick}>
        <div>
          <img className={styles.ModalImage} src={largeImageURL} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
