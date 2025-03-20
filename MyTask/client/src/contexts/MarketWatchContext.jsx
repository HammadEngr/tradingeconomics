import { createContext } from "react";
import useMarketWatch from "../hooks/useMarketWatch";

const MarketWatchContext = createContext({
  availablePairs: [],
  pairData: [],
  forecast: [],
});

const MarketWatchProvider = ({ children }) => {
  const {
    availablePairs,
    pairData,
    forecast,
    activePair,
    setActivePair,
    topNews,
    allNews,
  } = useMarketWatch();
  const store = {
    availablePairs,
    pairData,
    forecast,
    activePair,
    setActivePair,
    topNews,
    allNews,
  };

  return (
    <MarketWatchContext.Provider value={store}>
      {children}
    </MarketWatchContext.Provider>
  );
};

export { MarketWatchContext, MarketWatchProvider };
