import { useContext } from "react";
import { MarketWatchContext } from "../contexts/MarketWatchContext";

const useMarketWatchContext = () => {
  const ctx = useContext(MarketWatchContext);
  return ctx;
};

export default useMarketWatchContext;
