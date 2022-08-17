import { Col, Row, Typography } from "antd";
import React, { useState } from "react";
import NewsCard from "../../components/newsCard/newsCard.component";
import { useGetCoinsQuery } from "../../services/cryptoApi";
import { useGetCoinNewsQuery } from "../../services/newsApi";
import "./news.style.scss";

function News() {
  const [selectedCoin, setSelectedCoin] = useState("crypto");
  const parameters = {
    newsCategory: selectedCoin,
    count: 15,
  };
  const { data, error, isLoading } = useGetCoinNewsQuery(parameters);
  const {
    data: coinData,
    error: coinError,
    isLoading: coinLoading,
  } = useGetCoinsQuery();
  const latestNews = data?.value;
  const coinsList = coinData?.data?.coins;
  console.log(selectedCoin);
  if (error) return "error in coins news";
  return (
    <div className="news-container">
      <Typography.Title level={1}>Latest News</Typography.Title>
      <Row>
        <Col span={24} align="middle">
          <select
            className="form-select"
            onChange={(e) => setSelectedCoin(e.target.value)}
          >
            <option selected>Open this select menu</option>
            {coinsList &&
              coinsList.map((coin) => (
                <option value={coin.name} key={coin.name}>
                  {coin.name}
                </option>
              ))}
          </select>
        </Col>
      </Row>
      {isLoading ? (
        "loading"
      ) : (
        <>
          <Row style={{ marginTop: "2rem" }}>
            {latestNews.map((news, index) => (
              <Col xs={24} sm={12} md={24} lg={12} xxl={8} key={index}>
                <NewsCard news={news}></NewsCard>
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
}

export default News;
