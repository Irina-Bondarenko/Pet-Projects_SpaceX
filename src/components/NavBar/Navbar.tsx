import { NAVBAR_DATA } from "./NavBar.data";
import { StyledList, StyledListItem, StyledNavLink } from "../../styled";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <StyledList>
        {NAVBAR_DATA.map((item, index) => (
          <StyledListItem key={index} className="active">
            <StyledNavLink to={item.to}>
              <span className="menu-text">{item.textKey}</span>
            </StyledNavLink>
          </StyledListItem>
        ))}
      </StyledList>
    </nav>
  );
};
