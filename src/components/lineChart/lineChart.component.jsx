import { Col, Row, Typography } from "antd";
import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import moment from "moment";
import "./lineChart.styles.scss";

function LineChart({ coinHistory, currentPrice, coinName, timePeriod }) {
  const { Title } = Typography;
  Chart.register(CategoryScale);
  const coinPrice = [];
  const coinTimestamp = [];

  //looping through coinHistory for pushing the time and price in their respective arrays
  for (let i = 0; i < coinHistory?.history?.length; i++) {
    coinPrice.push(coinHistory.history[i].price);
    coinTimestamp.push(
      moment.unix(coinHistory.history[i].timestamp).format("lll")
    );
  }

  // data and option for chart
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };
  const options = {
    aspectRatio: 1.5,
  };

  return (
    <Row className="chart-container">
      <Col lg={12} xs={24}>
        <Title level={2}>{coinName} Price Chart</Title>
      </Col>
      <Col lg={12} xs={24}>
        <Title level={5}>
          {timePeriod} Changes: {coinHistory.change}%
        </Title>
        <Title level={5}>
          {coinName} Current Price: $ {currentPrice}
        </Title>
      </Col>
      <Col span={24}>
        <Line data={data} options={options} />
      </Col>
    </Row>
  );
}

export default LineChart;
