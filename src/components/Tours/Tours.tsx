import React, { useEffect } from "react";
import { StyledToursTitle, StyledToursContainer } from "../../styled";

import { SliderBox } from "../SliderBox";
import { GetTours } from "../../apollo/data/GetTours";
import Card1 from "../../images/cards/card-1.png";
import Card2 from "../../images/cards/card-2.png";
import Card3 from "../../images/cards/card-3.png";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { favoriteToursState, toursState } from "../../state";

import { IToursProps, IRocketProps, IDataProps } from "./Tours.types";

export const Tours = ({ scrollToSectionRef }: IToursProps) => {
  const { rockets } = GetTours();

  const setToursState = useSetRecoilState<IDataProps[]>(toursState);
  const favoriteTours = useRecoilValue(favoriteToursState);

  const images: string[] = [Card1, Card2, Card3];

  const dataWithImg =
    rockets &&
    rockets?.map((obj: IRocketProps, index: number) => ({
      ...obj,
      image: images[index % images.length],
      active: favoriteTours.some((favItem) => favItem.id === obj.id),
    }));

  useEffect(() => {
    setToursState(dataWithImg);
  }, [dataWithImg]);

  return (
    <StyledToursContainer ref={scrollToSectionRef}>
      <StyledToursTitle>popular tours</StyledToursTitle>
      <SliderBox data={dataWithImg} />
    </StyledToursContainer>
  );
};
