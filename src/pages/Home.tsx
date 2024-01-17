import React from "react";
import { Header } from "../components/Header";
import { MainBanner } from "../components/MainBanner";
import { useScrollToSection } from "../hooks/useScrollToSection";
import MainBannerImg from "../images/banners/main-banner.png";

import { GridMainContainerHorizontalPadding } from "../styled";
import { Tours } from "../components/Tours";

const Home: React.FC = () => {
  const { scrollToSectionRef, scrollToSection } = useScrollToSection();
  return (
    <>
      <Header />
      <MainBanner
        banner={MainBannerImg}
        title="The space is waiting for"
        titleLarge="YOU"
        favorites={false}
        scrollToSection={scrollToSection}
      />
      <GridMainContainerHorizontalPadding>
        <Tours scrollToSectionRef={scrollToSectionRef} />
      </GridMainContainerHorizontalPadding>
    </>
  );
};

export default Home;
