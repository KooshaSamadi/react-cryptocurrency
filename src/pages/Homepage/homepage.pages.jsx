import React, { useState } from "react";
import { Card, Col, Row, Statistic, Typography } from "antd";
import millify from "millify";
import "./homepage.style.scss";
import { useGetCoinsQuery } from "../../services/cryptoApi";
import CoinCard from "../../components/coinCard/coinCard.component";
const Homepage = () => {
  const { data: coinData, error, isLoading } = useGetCoinsQuery();
  const coinStats = coinData?.data?.stats;
  const coinsList = coinData?.data?.coins;
  console.log(coinsList);
  // if (isLoading) return "loading";
  return (
    <div className="homepage-container">
      <Typography.Title level={2} className="homepage-title">
        Global Crypto Stats
      </Typography.Title>
      {isLoading ? (
        "loading"
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
          <Row style={{ marginTop: "2rem" }}>
            {coinsList.slice(0, 10).map((coin) => (
              <Col xs={24} sm={12} lg={8} xxl={4}>
                <CoinCard coin={coin}></CoinCard>
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default Homepage;
