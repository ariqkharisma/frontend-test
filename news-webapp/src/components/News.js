/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Row, Skeleton} from "antd";
import VerticalNewsCard from "./VerticalNewsCard.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsEverything } from "../features/news-slice.js";

function News() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { articles } = useSelector(state => {return state.news.newsEverything})

  const fetchData = async () => {
    try {
      setLoading(true);
      await dispatch(fetchNewsEverything());
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div style={{ paddingBottom: "24px" }}>
        <h1
          style={{
            borderBottom: "5px solid #124559",
            width: "fit-content",
            padding: "2px",
            marginInline: "16px",
          }}
        >
          Latest
        </h1>
      </div>
      <Row gutter={[16, 16]} style={{ margin: "8px" }}>
        {!loading? articles && articles.length && articles.map((article, key) => {return <VerticalNewsCard key={key} article={article}/>}) :
            <>
              <Skeleton style={{ marginBottom: "32px" }} active />
              <Skeleton style={{ marginBottom: "32px" }} active />
              <Skeleton active />
            </>
        }
      </Row>
    </>
  );
}

export default News;
