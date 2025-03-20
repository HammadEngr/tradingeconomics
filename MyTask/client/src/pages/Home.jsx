import React from "react";
import NewsList from "../components/news/NewsList";
import ForecastList from "../components/forecast/ForecastList";
import MarketWatch from "../components/MarketWatch/MarketWatch";
import useMarketWatchContext from "../hooks/useMarketWatchContext";

function Home() {
  const { topNews } = useMarketWatchContext();
  return (
    <>
      <section>
        <MarketWatch />
      </section>
      <section id="top_news">
        <NewsList title="Top News" newsData={topNews} type="top" />
      </section>
      <section id="forecast">
        <ForecastList />
      </section>
    </>
  );
}

export default Home;
