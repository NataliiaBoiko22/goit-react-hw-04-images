import React, { useEffect } from "react";
import styles from './modal.module.css';
import PropTypes from "prop-types";

const Modal = ({ image, onClose }) => {

useEffect(() => {
const handleKeyDown = (event) => {
if (event.code === "Escape") {
onClose();
}
};
document.addEventListener("keydown", handleKeyDown);
return () => {
document.removeEventListener("keydown", handleKeyDown);
};
}, [onClose]);

return (
<div className={styles.overlay} onClick={onClose}>
<div className={styles.modal}>
<img src={image} alt="" />
</div>
</div>
);
};

Modal.propTypes = {
onClose: PropTypes.func.isRequired,
image: PropTypes.string.isRequired,
};

export default Modal;
