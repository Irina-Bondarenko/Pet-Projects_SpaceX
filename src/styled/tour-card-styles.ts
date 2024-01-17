import styled from "styled-components";
import * as colors from "./colors";

export const StyledTourCardContainer = styled.div`
  border: 2px solid ${colors.colorLightBlue};
`;

export const StyledTourCardImgContainer = styled.img`
  width: 100%;
`;

export const StyledTourCardContentContainer = styled.div`
  padding: 32px 32px 0 32px;
  text-align: center;
  font-family: "Syne Regular", sans-serif;
  min-height: 380px;
`;

export const StyledTourCardTitle = styled.h3`
  color: ${colors.colorBlackTitle};
  text-align: center;
  font-family: "Syne Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  padding-bottom: 16px;
  transform: scaleX(1.5);
`;

export const StyledTourCardDescription = styled.span`
  color: ${colors.colorLightGrey};
  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const StyledTourCardButtonsContainer = styled.div`
  display: flex;
  padding: 0 32px 24px 32px;
`;
