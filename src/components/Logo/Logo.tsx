import { Link } from "react-router-dom";

import LogoIcon from "../../images/svg/logo/logo_main.png";

export const Logo = () => {
  return (
    <div className="header-logo">
      <Link to="/">
        <img src={LogoIcon} alt="SpaceX logo" />
      </Link>
    </div>
  );
};
