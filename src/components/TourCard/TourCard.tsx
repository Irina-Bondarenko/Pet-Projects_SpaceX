import {
  StyledTourCardButtonsContainer,
  StyledTourCardContainer,
  StyledTourCardContentContainer,
  StyledTourCardDescription,
  StyledTourCardImgContainer,
  StyledTourCardTitle,
} from "../../styled";
import { ButtonBlue } from "../ButtonBlue";
import { ButtonFavorite } from "../ButtonFavorite";
import React from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { favoriteToursState, toursState } from "../../state";

import { ITourCardProps, IDataProps } from "./TourCard.types";

export const TourCard = ({
  data,
  titleClassName = "title",
}: ITourCardProps) => {
  const addTourToFavorites =
    useSetRecoilState<IDataProps[]>(favoriteToursState);
  const setToursState = useSetRecoilState<IDataProps[]>(toursState);

  const favoriteTours = useRecoilValue(favoriteToursState);

  const addTourToFavoritesHandler = (props: IDataProps) => {
    setToursState((oldToursState: IDataProps[]) => {
      const isItemInFavorites = favoriteTours.some(
        (favItem) => favItem.id === props.id,
      );

      return oldToursState.map((item) => ({
        ...item,
        active: item.id === props.id ? !isItemInFavorites : item.active,
      }));
    });

    addTourToFavorites((oldFavoritesList: IDataProps[]) => {
      const isTourAlreadyAdded = oldFavoritesList.some(
        (tour) => tour.id === props.id,
      );

      const updatedFavoritesList = isTourAlreadyAdded
        ? oldFavoritesList.filter((tour) => tour.id !== props.id)
        : [...oldFavoritesList, { ...props, active: true }];

      return updatedFavoritesList.map((tour) =>
        tour.id === props.id ? { ...tour, active: !isTourAlreadyAdded } : tour,
      );
    });
  };

  return (
    <StyledTourCardContainer>
      <div className="content">
        {data?.image && (
          <StyledTourCardImgContainer src={data.image} alt={data.name} />
        )}
        <StyledTourCardContentContainer>
          <StyledTourCardTitle className={titleClassName}>
            {data.name}
          </StyledTourCardTitle>
          {data?.description && (
            <StyledTourCardDescription className="desc">
              <p>{data.description}</p>
            </StyledTourCardDescription>
          )}
        </StyledTourCardContentContainer>
        <StyledTourCardButtonsContainer>
          <ButtonBlue title={"BUY"} width={"80%"} mr={"16px"} />
          <ButtonFavorite
            addTourToFavoritesHandler={() => addTourToFavoritesHandler(data)}
            data={data}
            isActive={data?.active}
          />
        </StyledTourCardButtonsContainer>
      </div>
    </StyledTourCardContainer>
  );
};
