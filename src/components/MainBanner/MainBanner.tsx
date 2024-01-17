import React, { useCallback } from "react";
import {
  StyledBannerTitle,
  StyledMainBanner,
  StyledMainBannerImage,
  Overlay,
  StyledBannerLarge,
} from "../../styled";

import { ButtonToNext } from "../ButtonToNext";
import { IMainBannerProps } from "./MainBanner.types";

export const MainBanner = ({
  title,
  titleLarge,
  banner,
  favorites = false,
  scrollToSection,
}: IMainBannerProps) => {
  const scrollToSectionHandler = useCallback(() => {
    scrollToSection && scrollToSection();
  }, [scrollToSection]);

  console.log(typeof favorites, favorites);

  return (
    <>
      <StyledMainBanner favorites={favorites}>
        <StyledMainBannerImage src={banner} alt="Main Banner SpaceX" />
        <Overlay />
        <StyledBannerTitle favorites={favorites}>{title}</StyledBannerTitle>
        <StyledBannerLarge>{titleLarge}</StyledBannerLarge>
      </StyledMainBanner>
      {!favorites && (
        <ButtonToNext title="Explore tours" onClick={scrollToSectionHandler} />
      )}
    </>
  );
};
