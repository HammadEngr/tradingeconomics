import React, { useState } from "react";
import styles from "../../styles/News.module.css";
import { ScanEye } from "lucide-react";
import Modal from "../../Layout/Modal";
import NewsDetails from "./NewsDetails";

function News({ news }) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, description, country, category } = news;

  const closeDetails = () => {
    setIsOpen(false);
  };
  const openDetails = () => {
    setIsOpen(true);
  };
  return (
    <>
      {isOpen ? (
        <Modal closeModal={closeDetails}>
          <NewsDetails news={news} />
        </Modal>
      ) : (
        ""
      )}
      <div className={styles.news_wrapper} onClick={openDetails}>
        <div className={styles.backdrop}></div>
        <ScanEye className={styles.scan_eye} />
        <div className={styles.news_box}>
          <div className={styles.top_box}>
            <p className={styles.news_symbol}>{category}</p>
            <p className={styles.news_country}>{country}</p>
          </div>
          <p className={styles.news_title}>{title}</p>
          <p className={styles.news_description}>{description}</p>
        </div>
      </div>
    </>
  );
}

export default News;
