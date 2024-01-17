import styled, { css } from "styled-components";

interface StyledBannerTitleProps {
  favorites?: boolean;
}

interface StyledMainBannerProps {
  favorites?: boolean;
}

export const StyledMainBanner = styled.div<StyledMainBannerProps>`
  ${({ favorites }) => css`
    height: ${favorites ? "inherit" : "100vh"};
    margin-top: -86px;
    position: relative;
  `};
`;

export const StyledMainBannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* чтобы изображение занимало всю высоту и ширину контейнера */
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Черный фон с прозрачностью 0.5 */
`;

export const StyledBannerTitle = styled.h3<StyledBannerTitleProps>`
  text-align: center;
  font-family: "Syne ExtraBold", sans-serif;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  position: absolute;
  top: ${(props) => (props?.favorites ? "50%" : "30%")};
  color: white;
  left: ${(props) => (props?.favorites ? "41%" : "28%")};
  font-size: 48px;
  transform: scaleX(1.7);
`;

export const StyledBannerLarge = styled.h2`
  text-align: center;
  font-family: "Syne ExtraBold", sans-serif;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  position: absolute;
  top: 35%;
  color: white;
  left: 29%;
  font-size: 310px;
  transform: scaleX(1.7);
`;
