import { Logo } from "../Logo";
import { NavBar } from "../NavBar";
import { ButtonFavorite } from "../ButtonFavorite";
import {
  LogoContainer,
  MenuContainer,
  FavoriteButtonContainer,
  HeaderContainer,
} from "../../styled";

import { ButtonBlue } from "../ButtonBlue";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <MenuContainer>
          <NavBar />
        </MenuContainer>

        <FavoriteButtonContainer>
          <ButtonFavorite toLink="/favorites" preset="white" />
          <ButtonBlue title="SIGN IN" />
        </FavoriteButtonContainer>
      </HeaderContainer>
    </>
  );
};

export { Header };
