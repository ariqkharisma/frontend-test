import React from "react";
import { Footer } from "antd/es/layout/layout";
import { Layout } from "antd";

function FooterSection() {
  return (
    <Layout>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#AEC3B0",
          marginTop: "16px",
        }}
      >
        EigenNews ©2022 Created by Ariq Kharisma Pratama
      </Footer>
    </Layout>
  );
}

export default FooterSection;
