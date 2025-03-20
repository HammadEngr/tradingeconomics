import React from "react";
import styles from "../../styles/NewsDetails.module.css";

function NewsDetails({ news }) {
  const { date, title, description, category, symbol, url } = news;
  return (
    <div className={styles.nd_wrapper}>
      <div className={styles.nd_box}>
        <div className={styles.nd_top}>
          <p className={styles.nd_date}>{date}</p>
          <div className={styles.nd_symbol}>
            <p>{category}</p>
            <p>{symbol}</p>
          </div>
        </div>
        <div className={styles.nd_title_box}>
          <p>{title}</p>
        </div>
        <p className={styles.nd_desc}>{description}</p>
        <p className={styles.nd_url}>
          <span>Source:</span> {url}
        </p>
      </div>
    </div>
  );
}

export default NewsDetails;
