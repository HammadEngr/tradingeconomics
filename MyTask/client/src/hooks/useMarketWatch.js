import { useEffect, useState } from "react";
import { fetchData } from "../helpers/apiRequests";

function useMarketWatch(defaultPair = "NZDUSD") {
  const [availablePairs, setAvailablePairs] = useState([]);
  const [activePair, setActivePair] = useState(defaultPair);

  const [pairData, setPairData] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [topNews, setTopNews] = useState([]);
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetchData("availablepairs").then((res) => setAvailablePairs(res || []));
    fetchData("forecast").then((res) => setForecast(res || []));
    fetchData("top-news").then((res) => setTopNews(res || []));
    fetchData("all-news").then((res) => setAllNews(res || []));
  }, []);

  useEffect(() => {
    fetchData("forex", activePair).then((res) => setPairData(res || []));
  }, [activePair]);

  return {
    availablePairs,
    pairData,
    forecast,
    activePair,
    setActivePair,
    topNews,
    allNews,
  };
}

export default useMarketWatch;
