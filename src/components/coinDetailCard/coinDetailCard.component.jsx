import "./coinDetailCard.styles.scss";

import React from "react";

function CoinDetailCard({ item }) {
  return (
    <div className="coin-detail-card-container">
      <div className="coin-detail-card-info">
        <p>
          {item.titleIcon} {item.title}
        </p>
        <p>{item.value}</p>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default CoinDetailCard;
