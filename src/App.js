import React from "react";
import "./app.scss";
import Navigation from "./components/navigation/navigation.components";
import { Routes, Route } from "react-router-dom";
import News from "./pages/News/news.pages";
import Homepage from "./pages/Homepage/homepage.pages";
import Cryptocurrencies from "./pages/Cryptocurrencies/cryptocurrencies.pages";
import Exchanges from "./pages/Exchanges/exchanges.pages";
import CryptoDetail from "./pages/cryptodetail/cryptodetail.pages";
import NotFound from "./pages/notFound/notFound.pages";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />} />
          <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="exchanges" element={<Exchanges />} />
          <Route path="news" element={<News />} />
          <Route path="cryptodetail" element={<CryptoDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
