import styled, { css } from "styled-components";
import * as colors from "./colors";
import { colorPink } from "./colors";

interface StyledButtonBlueProps {
  width?: string;
  mr?: string;
  buttonPaddings?: boolean;
  isActive?: boolean;
}

export const ButtonsStyles = styled.button<StyledButtonBlueProps>`
  background-color: ${(props) =>
    props?.isActive ? `${colors.colorPink}` : `${colors.colorWhiteWithBeige}`};
  color: ${colors.colorWhite};
  font-size: 16px;
  padding: ${(props) => (props?.buttonPaddings ? "10px 20px" : "0")};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${colors.colorPink};
  }
  a {
    display: flex;
    align-items: center;
    padding: 10px 20px;
  }
`;

export const StyledButtonBlue = styled.button<StyledButtonBlueProps>`
  ${({ theme, width, mr }) => css`
    background-color: ${colors.colorLightBlue};
    color: ${colors.colorBlack};
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    width: ${width || "165px"};
    margin-left: 12px;
    margin-right: ${mr || "0"};
    text-align: center;
    font-family: "Syne", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  `}
`;

export const StyledButtonToNextContainer = styled.button`
  ${({ theme }) => css`
    display: flex;
    position: absolute;
    top: 90%;
    right: 41%;
    background-color: transparent;
    color: ${colors.colorWhite};
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    text-align: center;
    font-family: "Syne", sans-serif;
    font-size: 32px;
    font-weight: 100;
    line-height: normal;
  `}
`;

export const StyledButtonToNext = styled.div`
  ${({ theme }) => css`
    margin-right: 10px;
  `}
`;

export const StyledButtonToNextTitle = styled.span`
  ${({ theme }) => css`
    -webkit-text-stroke-color: #080708;
    -webkit-text-stroke-width: 1px;
  `}
`;

export const StyledArrowSvg = styled.div`
  ${({ theme }) => css``}
`;
