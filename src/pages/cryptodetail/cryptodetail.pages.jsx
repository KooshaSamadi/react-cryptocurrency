import React from "react";
import { useParams } from "react-router-dom";
import { useGetCoinDetailQuery } from "../../services/cryptoApi";

const CryptoDetail = () => {
  const { coinId } = useParams();
  const { data, error, isLoading } = useGetCoinDetailQuery(coinId);
  const coinData = data?.data?.coin;
  console.log(coinData);
  return <div className="cryptoDetail-container">CryptoDetail</div>;
};

export default CryptoDetail;
