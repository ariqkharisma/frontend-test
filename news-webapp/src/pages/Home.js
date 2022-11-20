import React, { Fragment } from "react";
import FooterSection from "../components/FooterSection";
import HeaderSection from "../components/HeaderSection";
import HeadlineSection from "../components/HeadlineSection";
import News from "../components/News";

function Home() {

  return (
    <Fragment>
      <HeaderSection />
      <section id="main" style={{ minHeight: "calc(100vh - 131px)" }}>
        <HeadlineSection/>
        <News />
      </section>
      <FooterSection />
    </Fragment>
  );
}

export default Home;
