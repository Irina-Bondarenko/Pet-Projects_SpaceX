import styled from "styled-components";
import * as colors from "./colors";

export const StyledSwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 80px;
`;

export const StyledSwiperButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: calc(100% - 123px);
  top: 25px;
`;

export const StyledSwiperButtonNext = styled.button`
  left: 0;
  right: 0;
  width: 40px;
  height: 40px;
  position: static;
  margin-left: 20px;
  border: none;

  &::after {
    font-size: 10px;
    color: ${colors.colorBlack};
  }
`;

export const StyledSwiperButtonPrev = styled.button`
  left: 0;
  right: 0;
  position: static;
  width: 40px;
  height: 40px;
  border: none;

  &::after {
    font-size: 10px;
    color: ${colors.colorBlack};
  }
`;
