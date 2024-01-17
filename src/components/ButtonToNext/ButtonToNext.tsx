import { IButtonToNextProps } from "./ButtonToNext.types";
import {
  StyledArrowSvg,
  StyledButtonToNext,
  StyledButtonToNextContainer,
  StyledButtonToNextTitle,
} from "../../styled";

import ArrowIcon from "../../images/svg/icons/arrow.svg";

const ButtonToNext = ({ onClick, title }: IButtonToNextProps) => {
  return (
    <StyledButtonToNextContainer>
      <StyledButtonToNext onClick={onClick}>
        <StyledButtonToNextTitle>{title}</StyledButtonToNextTitle>
      </StyledButtonToNext>
      <StyledArrowSvg>
        <img src={ArrowIcon} className="btn-light" alt="Explore Tours"></img>
      </StyledArrowSvg>
    </StyledButtonToNextContainer>
  );
};

export { ButtonToNext };
