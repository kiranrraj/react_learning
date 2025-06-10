import styles from "../Styles/Modal.module.css";

export default function Modal({ onClose, children }) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}
