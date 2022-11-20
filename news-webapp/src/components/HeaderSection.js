import { Header } from "antd/es/layout/layout";
import { Layout } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import styles from "../styles/Header.module.scss";
import React, { useState } from "react";

function HeaderSection() {
  const [collapse, setCollapse] = useState(true);

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "#124559",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.navbar__brand}>
          <a href="/">EigenNews</a>
        </div>
        {collapse ? (
          <MenuOutlined
            className={styles.navbar__hamburger}
            onClick={() => {
              collapse ? setCollapse(false) : setCollapse(true);
            }}
          />
        ) : (
          <CloseOutlined
            className={styles.navbar__hamburger}
            onClick={() => {
              collapse ? setCollapse(false) : setCollapse(true);
            }}
          />
        )}
        <div
          className={
            collapse
              ? `${styles.navbar__nav} ${styles.collapse}`
              : `${styles.navbar__nav}`
          }
        >
          <ul className={styles.nav}>
            <li className={styles.nav__item}>
              <a href="/technology">Technology</a>
            </li>
            <li className={styles.nav__item}>
              <a href="/lifestyle">Lifestyle</a>
            </li>
            <li className={styles.nav__item}>
              <a href="/sport">Sport</a>
            </li>
            <li className={styles.nav__item}>
              <a href="/education">Education</a>
            </li>
            <li className={styles.nav__item}>
              <a href="/business">Business</a>
            </li>
          </ul>
        </div>
      </Header>
    </Layout>
  );
}

export default HeaderSection;
