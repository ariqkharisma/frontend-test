import React from "react";
import { Card } from "antd";

function HorizontalNewsCard({ article }) {
  return (
    <Card
      hoverable
      bordered={true}
      style={{
        width: "100%",
        minHeight: "120px",
        display: "flex",
        marginBottom: "8px",
      }}
      cover={
        article.urlToImage ? (
          <img
            alt="example"
            src={article.urlToImage}
            style={{
              height: "100%",
              width: "120px",
              borderRadius: "10px 0 0 10px",
              objectFit: "cover",
            }}
          />
        ) : (
          <img
            alt="example"
            src="/black.jpg"
            style={{
              height: "100%",
              width: "120px",
              borderRadius: "10px 0 0 10px",
              objectFit: "cover",
            }}
          />
        )
      }
    >
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          bottom: "0",
          top: "0",
          marginRight: "8px",
        }}
      >
        <p style={{ color: "#c9c9c9" }}>{article.publishedAt.slice(0, 10)}</p>
        <p style={{ fontSize: "14px", fontWeight: "700" }}>
          {article.title.slice(0, 85)}...
        </p>
      </div>
    </Card>
  );
}

export default HorizontalNewsCard;
