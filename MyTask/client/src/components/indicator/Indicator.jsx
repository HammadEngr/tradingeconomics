import React from "react";
import styles from "../../styles/Indicator.module.css";
//
function Indicator({ country, continent, setCountry }) {
  return (
    <div className={styles.ind_box} onClick={() => setCountry(country)}>
      <p className={styles.ind_cat}>{country}</p>
      <p className={styles.ind_grp}>{continent}</p>
    </div>
  );
}

export default Indicator;
