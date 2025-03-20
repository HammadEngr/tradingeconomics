import React from "react";
import styles from "../styles/Modal.module.css";
import { createPortal } from "react-dom";

function Modal({ children, closeModal }) {
  return createPortal(
    <div className={styles.overlay} onClick={closeModal}>
      {children}
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
