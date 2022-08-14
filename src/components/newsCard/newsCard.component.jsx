import "./newsCard.style.scss";

import React from "react";

import { Link } from "react-router-dom";
import { Card } from "antd";
import moment from "moment";

function NewsCard({ news }) {
  const { name, url, image, provider, description, datePublished } = news;
  const imageUrl = image?.thumbnail?.contentUrl;
  const providerOrg = provider[0]?.name;
  const providerImage = provider[0]?.image?.thumbnail?.contentUrl;

  const notFoundImgAlternative =
    "https://static.news.bitcoin.com/wp-content/uploads/2022/08/shutterstock_1997833544.jpg";
  return (
    <a href={url} rel="noreferrer" target="_blank" title={providerOrg}>
      <Card
        title={name}
        extra={
          <img
            src={imageUrl || notFoundImgAlternative}
            style={{ width: 50, padding: "5px" }}
          />
        }
        hoverable
      >
        <p>
          {description.length > 100
            ? description.substring(0, 100) + " ..."
            : description}
        </p>
        <p>{moment(datePublished).startOf("ss").fromNow()}</p>
        <Card.Meta
          title={providerOrg}
          avatar={
            <img
              src={providerImage || notFoundImgAlternative}
              style={{ width: 30 }}
            />
          }
        ></Card.Meta>
      </Card>
    </a>
  );
}

export default NewsCard;
