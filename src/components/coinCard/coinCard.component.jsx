import "./coinCard.style.scss";
import React from "react";

import { Card } from "antd";
import millify from "millify";
import { Link } from "react-router-dom";
function CoinCard({ coin, index }) {
  //console.log(coin);
  return (
    <Link to={`../crypto/${coin.uuid}`}>
      {/* some of the coins do not have color for border so i set it to blue */}
      <Card
        title={`${index + 1}. ${coin.name}`}
        extra={<img src={coin.iconUrl} style={{ width: 30 }} />}
        hoverable
        style={{ borderTop: `5px solid ${coin.color ? coin.color : "blue"}` }}
      >
        <p>Market Cap: {millify(coin.marketCap)}</p>
        <p>Price: {`${millify(coin.price)} $`}</p>
        <p>Daily Change: {millify(coin.change)} %</p>
      </Card>
    </Link>
  );
}

export default CoinCard;
