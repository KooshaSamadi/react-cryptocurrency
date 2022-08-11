import React from "react";
import { Col, Row, Statistic } from "antd";
import "./homepage.style.scss";
import { useGetCoinsQuery } from "../../services/cryptoApi";
const Homepage = () => {
  const { data, error, isLoading } = useGetCoinsQuery();
  console.log(data, error, isLoading);

  return (
    <div className="homepage-container">
      <Row>
        <Col xs={24} sm={12} xxl={8}>
          <Statistic title=" Total Cryptocurrncies"></Statistic>
        </Col>
        <Col xs={24} sm={12} xxl={8}>
          <Statistic title="  Total Exchanges "></Statistic>
        </Col>
        <Col xs={24} sm={12} xxl={8}>
          <Statistic title="    Total Market Cap  "></Statistic>
        </Col>
        <Col xs={24} sm={12} xxl={8}>
          <Statistic title="   Total 24h Volume "></Statistic>
        </Col>
        <Col xs={24} sm={12} xxl={8}>
          <Statistic title="  Total Markets   "></Statistic>
        </Col>
        <Col xs={24} sm={12} xxl={8}>
          <Statistic title="  Btc Dominance   "></Statistic>
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
