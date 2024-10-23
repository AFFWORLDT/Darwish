import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import useOutsideClick from "../hooks/useOutsideClick";
import { cloneElement } from "react";

function Modal({ close, children }) {
  const ref = useOutsideClick(close);

  return createPortal(
    <div className={styles.overlay}>
      <div ref={ref} className={styles.modalContainer}>
        {children}
        <button className={styles.btnClose} onClick={close}>
          <img src="/icons/close.svg" alt="" />
        </button>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
