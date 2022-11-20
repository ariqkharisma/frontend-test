/* eslint-disable react-hooks/exhaustive-deps */
import { Carousel, Row, Col, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsHeadline } from "../features/news-slice";
import HorizontalNewsCard from "./HorizontalNewsCard";

function HeadlineSection() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { articles } = useSelector((state) => {
    return state.news.newsHeadline;
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      await dispatch(fetchNewsHeadline());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Row>
      <Col lg={{ span: 14 }} span={24}>
        <Carousel autoplay style={{ margin: "16px" }}>
          {articles &&
            articles.length &&
            articles.map((article, key) => {
              return (
                <div>
                  <img
                    className="carousel__image"
                    alt="news-item"
                    src={article.urlToImage}
                    style={{
                      height: "560px",
                      color: "#fff",
                      lineHeight: "160px",
                      textAlign: "center",
                      background: "#364d79",
                    }}
                  />
                </div>
              );
            })}
        </Carousel>
      </Col>

      <Col lg={{ span: 10 }} span={24} style={{ padding: "16px" }}>
        <div style={{ paddingBottom: "16px" }}>
          <h1
            style={{
              borderBottom: "5px solid #124559",
              width: "fit-content",
              padding: "2px",
              fontSize: "24px",
            }}
          >
            Trending
          </h1>
        </div>

        {!loading ? (
          articles &&
          articles.length &&
          articles.map((article, key) => {
            return (
              <a href={article.url}>
                <HorizontalNewsCard article={article} key={key} />
              </a>
            );
          })
        ) : (
          <div>
            <Skeleton style={{ marginBottom: "32px" }} active />
            <Skeleton style={{ marginBottom: "32px" }} active />
            <Skeleton active />
          </div>
        )}
      </Col>
    </Row>
  );
}

export default HeadlineSection;
