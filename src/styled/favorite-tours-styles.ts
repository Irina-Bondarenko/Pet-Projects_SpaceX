import styled from "styled-components";
import * as colors from "./colors";

export const ToursContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 80px 40px 80px;
`;

export const TourItem = styled.div`
  flex: 0 0 33.33%;
  padding: 10px;
`;

export const ToursButtonClearContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 40px 80px 0 80px;
`;

export const ToursButtonClear = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
  color: ${colors.colorLightGrey};

  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
