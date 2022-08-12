import "./coinCard.style.scss";
import React from "react";

import { Card, Meta } from "antd";
import millify from "millify";
const CoinCard = ({ coin }) => {
  //console.log(coin);
  return (
    <Card
      cover={<img src={coin.iconUrl} />}
      title={coin.name}
      hoverable
      size="small"
    >
      <Card.Meta title="Market Cap" description={millify(coin.marketCap)} />
      <Card.Meta
        title="Price"
        description={`${millify(coin.price)} $`}
        style={{ marginTop: "1rem" }}
      />
    </Card>
  );
};

export default CoinCard;
