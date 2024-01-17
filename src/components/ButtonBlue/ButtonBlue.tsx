import { Link } from "react-router-dom";

import { IButtonBlueProps } from "./ButtonBlue.types";
import { StyledButtonBlue } from "../../styled";

const ButtonBlue = ({ toLink, title, width, mr }: IButtonBlueProps) => {
  return (
    <StyledButtonBlue width={width} mr={mr}>
      <Link to={toLink || "/"}>{title}</Link>
    </StyledButtonBlue>
  );
};

export { ButtonBlue };
