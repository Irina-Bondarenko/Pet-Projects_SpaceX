import { Link } from "react-router-dom";
import { useMemo, MouseEventHandler } from "react";

import HeartIconLight from "../../images/svg/icons/heart_light.png";
import HeartIconDark from "../../images/svg/icons/heart_dark.png";
import { ButtonPresets } from "./ButtonFavorite.data";

import { IButtonProps } from "./ButtonFavorite.types";
import { ButtonsStyles } from "../../styled";

const ButtonFavorite = ({
  addTourToFavoritesHandler,
  toLink,
  preset = ButtonPresets.WHITE,
  data,
}: IButtonProps) => {
  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    if (addTourToFavoritesHandler && data) {
      addTourToFavoritesHandler(data);
    }
  };

  const renderMainPart = useMemo(
    () => (
      <>
        {preset === ButtonPresets.WHITE ? (
          <img
            src={HeartIconDark}
            className="btn-light"
            alt="Favorite icon light"
          ></img>
        ) : (
          <img
            src={HeartIconLight}
            className="btn-dark"
            alt="Favorite icon dark"
          ></img>
        )}
      </>
    ),
    [],
  );
  return (
    <>
      {toLink && (
        <ButtonsStyles>
          <Link to={toLink}>{renderMainPart}</Link>
        </ButtonsStyles>
      )}

      {addTourToFavoritesHandler && (
        <ButtonsStyles
          onClick={handleButtonClick}
          buttonPaddings={true}
          isActive={data?.active}
        >
          {renderMainPart}
        </ButtonsStyles>
      )}
    </>
  );
};

export { ButtonFavorite };
