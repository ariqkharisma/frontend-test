import React from "react";
import { Card, Col } from "antd";

function VerticalNewsCard({ article }) {
  return (
    <Col md={{ span: 12 }} lg={{ span: 8 }} span={24}>
      <a href={article.url}>
        <Card
          hoverable
          bordered={true}
          style={{
            width: "100%",
            height: "100%",
          }}
          cover={
            article.urlToImage ? (
              <img
                alt="news-item"
                src={article.urlToImage}
                style={{ height: "225px", objectFit: "cover" }}
              />
            ) : (
              <img
                alt="example"
                src="/black.jpg"
                style={{ height: "225px", objectFit: "cover" }}
              />
            )
          }
        >
          <p
            style={{ fontSize: "18px", fontWeight: 700, lineHeight: "normal" }}
          >
            {article.title}
          </p>
          <p style={{ marginTop: "16px", marginBottom: "8px" }}>
            {article.description}
          </p>
          <p style={{ color: "#c9c9c9" }}>{article.publishedAt.slice(0, 10)}</p>
        </Card>
      </a>
    </Col>
  );
}

export default VerticalNewsCard;
