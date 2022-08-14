import React, { useState } from "react";
import { Card, Col, Row, Statistic, Typography, Button } from "antd";
import millify from "millify";
import "./homepage.style.scss";
import { useGetCoinsQuery } from "../../services/cryptoApi";
import CoinCard from "../../components/coinCard/coinCard.component";
import { Link } from "react-router-dom";
import { useGetCoinNewsQuery } from "../../services/newsApi";
import NewsCard from "../../components/newsCard/newsCard.component";

function Homepage() {
  const {
    data: coinData,
    error: errorCoins,
    isLoading: isLoadingCoins,
  } = useGetCoinsQuery();
  const coinStats = coinData?.data?.stats;
  const coinsList = coinData?.data?.coins;
  const parameters = {
    newsCategory: "crypto",
    count: 10,
  };
  const {
    data: dataNews,
    error: errorNews,
    isLoading: isLoadingNews,
  } = useGetCoinNewsQuery(parameters);
  const latestNews = dataNews?.value;
  //console.log(coinsList);
  if (errorCoins) return "errorCoins";
  return (
    <div className="homepage-container">
      <Typography.Title level={2} className="homepage-title">
        Global Crypto Stats
      </Typography.Title>
      {isLoadingCoins ? (
        "loading Coins"
      ) : (
        <>
          <Row>
            <Col xs={24} sm={12} xxl={8}>
              <Statistic
                title=" Total Cryptocurrncies"
                value={millify(coinStats.totalCoins)}
              ></Statistic>
            </Col>
            <Col xs={24} sm={12} xxl={8}>
              <Statistic
                title="  Total Exchanges "
                value={millify(coinStats.totalExchanges)}
              ></Statistic>
            </Col>
            <Col xs={24} sm={12} xxl={8}>
              <Statistic
                title="    Total Market Cap  "
                value={millify(coinStats.totalMarketCap)}
              ></Statistic>
            </Col>
            <Col xs={24} sm={12} xxl={8}>
              <Statistic
                title="   Total 24h Volume "
                value={millify(coinStats.total24hVolume)}
              ></Statistic>
            </Col>
            <Col xs={24} sm={12} xxl={8}>
              <Statistic
                title="  Total Markets   "
                value={millify(coinStats.totalMarkets)}
              ></Statistic>
            </Col>
          </Row>

          {/* ------------------------- Coins Section ------------------------- */}
          <div className="homepage-top10">
            <Typography.Title level={2}>
              Top 10 Cryptocurrencies in the World
            </Typography.Title>
            <Link to="cryptocurrencies">
              <Button type="primary" size="large">
                Show More
              </Button>
            </Link>
          </div>

          <Row style={{ marginTop: "2rem" }}>
            {coinsList.slice(0, 10).map((coin, index) => (
              <Col xs={24} sm={12} md={12} lg={8} xxl={6} key={coin.uuid}>
                <CoinCard coin={coin} index={index}></CoinCard>
              </Col>
            ))}
          </Row>

          {/* ------------------------- News Section ------------------------- */}
          <div className="homepage-news-title">
            <Typography.Title level={2}>Latest News</Typography.Title>
            <Link to="news">
              <Button type="primary" size="large">
                Show More
              </Button>
            </Link>
          </div>

          {isLoadingNews ? (
            "Loading news"
          ) : (
            <Row style={{ marginTop: "2rem" }}>
              {latestNews.slice(0, 6).map((news, index) => (
                <Col xs={24} sm={12} md={12} lg={8} xxl={6} key={index}>
                  <NewsCard news={news} />
                </Col>
              ))}
            </Row>
          )}
        </>
      )}
    </div>
  );
}

export default Homepage;
