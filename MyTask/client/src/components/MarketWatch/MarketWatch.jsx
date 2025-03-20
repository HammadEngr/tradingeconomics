import React, { useState } from "react";
import styles from "../../styles/MarketWatch.module.css";
import AreaChartComponent from "../../charts/AreaChartComponent";
import useMarketWatchContext from "../../hooks/useMarketWatchContext";
// fallbackData
// import pairRawData from "../../raw_data/pairData";
import availablePairsData from "../../raw_data/availablePairs";
import Skeleton from "../../Layout/Skeleton";
//
function MarketWatch() {
  const [activeTab, setActiveTab] = useState("forex");
  const { availablePairs, pairData, activePair, setActivePair } =
    useMarketWatchContext();

  // const finalPairData = pairData.length > 0 ? pairData : pairRawData;
  const finalAPdata =
    availablePairs.length > 0 ? availablePairs : availablePairsData;

  const changeTab = (val) => {
    setActiveTab(val);
  };
  const changePair = (symbol) => {
    setActivePair(symbol);
  };

  return (
    <div className={styles.mw_wrapper}>
      <p className={styles.mw_title}>Market Watch</p>
      <div className={styles.mw_btns}>
        <button
          name="forex"
          onClick={() => {
            changeTab("forex");
          }}
          className={activeTab === "forex" ? styles.active_pair_btn : ""}
        >
          Forex
        </button>
        <button
          name="stock"
          onClick={() => {
            changeTab("stock");
          }}
          className={activeTab === "stock" ? styles.active_pair_btn : ""}
        >
          Stock
        </button>
        <button
          name="commodities"
          onClick={() => {
            changeTab("commodities");
          }}
          className={activeTab === "commodities" ? styles.active_pair_btn : ""}
        >
          Commodities
        </button>
      </div>
      <div className={styles.mw_plot}>
        <div className={styles.pairs_btn_box}>
          {finalAPdata.map((pair, i) => (
            <button
              key={`mw_pairs_${i}`}
              className={
                activePair === pair.name
                  ? `${styles.pairs_btn} ${styles.active_pair_btn}`
                  : `${styles.pairs_btn}`
              }
              name={pair.symbol}
              onClick={() => changePair(pair.name)}
            >
              <div className={styles.pair}>{pair.name}</div>
              <div className={styles.price}>
                <span>{pair.close}</span>
                <span>{pair.dailyChange}%</span>
              </div>
            </button>
          ))}
        </div>
        <div>
          {pairData.length === 0 ? (
            <Skeleton className={styles.skeleton} />
          ) : (
            <AreaChartComponent data={pairData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MarketWatch;
