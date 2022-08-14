import { Col, Row, Typography } from "antd";
import React from "react";
import NewsCard from "../../components/newsCard/newsCard.component";
import { useGetCoinNewsQuery } from "../../services/newsApi";
import "./news.style.scss";

function News() {
  const parameters = {
    newsCategory: "crypto",
    count: 10,
  };
  const { data, error, isLoading } = useGetCoinNewsQuery(parameters);
  const latestNews = data?.value;
  if (error) return "error in coins news";
  return (
    <div className="news-container">
      <Typography.Title level={1}>Latest News</Typography.Title>
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
