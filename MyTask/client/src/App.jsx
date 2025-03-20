import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Indicators from "./pages/Indicators";
import NewsPage from "./pages/NewsPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/indicators" element={<Indicators />} />
      </Route>
    </Routes>
  );
}

export default App;
