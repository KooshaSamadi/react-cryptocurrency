import { Row, Col, Typography, Card, Divider } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CoinDetailCard from "../../components/coinDetailCard/coinDetailCard.component";
import {
  DollarOutlined,
  NumberOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  StopOutlined,
  CheckOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import {
  useGetCoinDetailQuery,
  useGetCoinHistoryQuery,
} from "../../services/cryptoApi";
import millify from "millify";
import HTMLReactParser from "html-react-parser";
import "./cryptodetail.style.scss";
import LineChart from "../../components/lineChart/lineChart.component";

const CryptoDetail = () => {
  const { Text, Title } = Typography;
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const parameters = {
    coinId,
    timePeriod,
  };
  const { data, error, isLoading } = useGetCoinDetailQuery(coinId);
  const {
    data: historyData,
    error: errorData,
    isLoading: isLoadingData,
  } = useGetCoinHistoryQuery(parameters);
  const coinData = data?.data?.coin;
  const coinHistory = historyData?.data;

  if (isLoading) return "loading coin";
  if (isLoadingData) return "loading history";

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
  const valueStats = [
    {
      title: "Price To USD",
      value: millify(coinData.price) + " $",
      titleIcon: <DollarOutlined />,
    },
    { title: "Rank", value: coinData.rank, titleIcon: <NumberOutlined /> },
    {
      title: "Fully Diluted MarketCap",
      value: millify(coinData.fullyDilutedMarketCap) + " $",
      titleIcon: <ThunderboltOutlined />,
    },
    {
      title: "MarketCap",
      value: millify(coinData.marketCap) + " $",
      titleIcon: <DollarOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: millify(coinData.allTimeHigh?.price) + " $",
      titleIcon: <TrophyOutlined />,
    },
  ];
  const infoStats = [
    {
      title: "Number Of Markets",
      value: millify(coinData.numberOfMarkets),
      titleIcon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: millify(coinData.numberOfExchanges),
      titleIcon: <MoneyCollectOutlined />,
    },
    {
      title: "Approved Supply",
      value: coinData.supply.confirmed ? "True" : "False",
      titleIcon: coinData.supply.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
    },
    {
      title: "Supply At",
      value: coinData.supply.supplyAt
        ? millify(coinData.supply.supplyAt) + " $"
        : "Not Provided",
      titleIcon: <ExclamationCircleOutlined />,
    },
    {
      title: "Cirulating Supply",
      value: millify(coinData.supply.circulating) + " $",
      titleIcon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <section className="cryptoDetail-container">
      <Row className="cryptoDetail-title">
        <Col span={24} align="middle">
          <Title level={1}>{coinData.name}</Title>
        </Col>
        <Col span={24} align="middle">
          <Text>
            {coinData.name} live price in US dollars. View value statistics,
            market cap and supply.
          </Text>
        </Col>
        <Col span={24}></Col>
      </Row>

      <div className="time-period-select">
        <select
          className="form-select"
          placeholder="Select Time Period"
          onChange={(e) => setTimePeriod(e.target.value)}
        >
          {time.map((date) => (
            <option selected={date === "7d"} key={date}>
              {date}
            </option>
          ))}
        </select>
      </div>

      {/* Line Chart */}
      <LineChart
        coinName={coinData.name}
        currentPrice={millify(coinData.price)}
        coinHistory={coinHistory}
        timePeriod={timePeriod}
      />

      {/* four cards for overall detail */}
      <Row className="cryptoDetail-overall">
        <Col xs={24} md={24} lg={12}>
          <Card title={`${coinData.name} Value Statistics`}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in
              ipsum vitae tenetur perspiciatis quibusdam?
            </Text>

            {valueStats.map((item, index) => (
              <CoinDetailCard item={item} key={index} />
            ))}
          </Card>
        </Col>
        <Col xs={24} md={24} lg={12}>
          <Card title="Other Stats Info">
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in
              ipsum vitae tenetur perspiciatis quibusdam?
            </Text>

            {infoStats.map((item, index) => (
              <CoinDetailCard item={item} key={index} />
            ))}
          </Card>
        </Col>
        <Col xs={24} md={24} lg={12}>
          <Card title={`What is ${coinData.name}`}>
            {HTMLReactParser(coinData.description)}
          </Card>
        </Col>
        <Col xs={24} md={24} lg={12}>
          <Card title={`${coinData.name} Links`}>
            {coinData.links.map((link, index) => (
              <div className="coin-detail-card-container" key={index}>
                <div className="coin-detail-card-info">
                  <p>{link.type}</p>
                  <a target="_blank" href={link.url}>
                    {link.name}
                  </a>
                </div>
                <div className="line"></div>
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default CryptoDetail;
