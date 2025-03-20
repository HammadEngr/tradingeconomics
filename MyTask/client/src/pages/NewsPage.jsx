import React from "react";
import NewsList from "../components/news/NewsList";
import useMarketWatchContext from "../hooks/useMarketWatchContext";

function NewsPage() {
  const { allNews } = useMarketWatchContext();
  return (
    <div>
      <NewsList newsData={allNews} title="All News" />
    </div>
  );
}

export default NewsPage;
