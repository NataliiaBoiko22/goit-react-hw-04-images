import React from 'react';
import styles from './modal.module.css';
import PropTypes from "prop-types";

const Modal = ({ onClose, image }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
  image: PropTypes.string.isRequired,
};

export default Modal;

