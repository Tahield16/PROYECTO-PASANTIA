// src/components/Spinner/Spinner.jsx
import styles from "./Spinner.module.scss";

export const Spinner = ({ message = "Cargando juego/s" }) => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.message}>{message}</p>
    </div>
  );
};
