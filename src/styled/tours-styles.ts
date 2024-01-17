import styled from "styled-components";
import * as colors from "./colors";

export const StyledToursContainer = styled.div`
  position: relative;
`;

export const StyledToursTitle = styled.h2`
  color: ${colors.colorBlackTitle};
  transform: scaleX(1.7);
  font-family: "Syne ExtraBold", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;

  position: absolute;
  left: 7%;
`;
