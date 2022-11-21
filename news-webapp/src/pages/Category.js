/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import FooterSection from "../components/FooterSection";
import HeaderSection from "../components/HeaderSection";
import { fetchNewsCategory } from "../features/news-slice";
import { Row, Skeleton } from "antd";
import VerticalNewsCard from "../components/VerticalNewsCard";

function Category() {
  const location = useLocation();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { articles } = useSelector((state) => {
    return state.news.newsCategory;
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      await dispatch(fetchNewsCategory(location.pathname.slice(1)));
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
    <Fragment>
      <HeaderSection />
      <section
        id="main"
        style={{ minHeight: "calc(100vh - 131px)", marginTop: "65px" }}
      >
        <h1
          style={{
            margin: "97px 16px 32px 16px",
            borderBottom: "5px solid #124559",
            padding: "2px",
            width: "fit-content",
          }}
        >
          {location.pathname.slice(1).toLocaleUpperCase()}
        </h1>
        <Row gutter={[16, 16]} style={{ margin: "8px" }}>
          {!loading ? (
            articles &&
            articles.length &&
            articles.map((article, key) => {
              return <VerticalNewsCard key={key} article={article} />;
            })
          ) : (
            <>
              <Skeleton
                style={{ marginBottom: "32px", marginInline: "16px" }}
                active
              />
              <Skeleton
                style={{ marginBottom: "32px", marginInline: "16px" }}
                active
              />
              <Skeleton
                style={{ marginBottom: "32px", marginInline: "16px" }}
                active
              />
            </>
          )}
        </Row>
      </section>
      <FooterSection />
    </Fragment>
  );
}

export default Category;
