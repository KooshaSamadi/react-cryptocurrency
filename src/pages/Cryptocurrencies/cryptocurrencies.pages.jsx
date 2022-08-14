import { Col, Row, Input, Typography } from "antd";
import React, { useEffect, useState } from "react";
import CoinCard from "../../components/coinCard/coinCard.component";
import { useGetCoinsQuery } from "../../services/cryptoApi";
import "./cryptocurrencies.style.scss";

function Cryptocurrencies() {
  const { data: coinData, error, isLoading } = useGetCoinsQuery();
  const [searchData, setSearchData] = useState("");
  const coinsList = coinData?.data?.coins;
  const [filteredData, setFilteredData] = useState(coinsList);

  useEffect(() => {
    const filtered = coinsList?.filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchData.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchData.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchData, coinData]);

  if (error) return "error";

  return (
    <div className="cryptocurrency-container">
      <Typography.Title level={1}>Cryptocurrencies List</Typography.Title>
      <div className="cryptocurrency_searchBox">
        <Input.Search
          placeholder="Search Coin"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={(e) => setSearchData(e)}
        />
      </div>

      {isLoading ? (
        "loading"
      ) : (
        <Row style={{ marginTop: "2rem" }}>
          {filteredData?.map((coin, index) => (
            <Col xs={24} sm={12} md={12} lg={8} xxl={6} key={coin.uuid}>
              <CoinCard coin={coin} index={index}></CoinCard>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Cryptocurrencies;
