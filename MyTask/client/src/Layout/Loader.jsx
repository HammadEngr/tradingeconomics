import React from "react";
import styles from "../styles/Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader_box}>
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loader;
