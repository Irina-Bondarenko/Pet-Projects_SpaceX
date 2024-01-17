import { useRecoilValue, useSetRecoilState } from "recoil";

import { favoriteToursState } from "../../state";
import { TourCard } from "../TourCard";
import {
  ToursContainer,
  TourItem,
  ToursButtonClearContainer,
  ToursButtonClear,
} from "../../styled";

interface IDataProps {
  id: string;
  name: string;
  description: string;
  image?: string;
  active?: boolean;
}

export const FavoriteToursList = () => {
  const favoriteTours = useRecoilValue(favoriteToursState);

  const clearAllTourToFavorites =
    useSetRecoilState<IDataProps[]>(favoriteToursState);

  const clearFavoriteToursHandler = () => {
    clearAllTourToFavorites([]);
  };

  return (
    <>
      <ToursButtonClearContainer>
        <ToursButtonClear onClick={clearFavoriteToursHandler}>
          Clear all
        </ToursButtonClear>
      </ToursButtonClearContainer>
      <ToursContainer>
        {favoriteTours.length > 0 &&
          favoriteTours.map((item, index) => (
            <TourItem key={index}>
              <TourCard data={item} />
            </TourItem>
          ))}
      </ToursContainer>
    </>
  );
};
