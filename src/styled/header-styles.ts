import styled, { css } from "styled-components";
import * as colors from "./colors";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  z-index: 1000;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px 80px;
  height: 86px;
`;

export const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const LogoContainer = styled.div`
  flex: 1; /* Не растягивать, оставить размер как есть */
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const FavoriteButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

export const StyledList = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 15px;
  padding-right: 15px;
`;

export const StyledListItem = styled.li`
  padding-left: 15px;
  padding-right: 15px;
  text-decoration: none;
  color: ${colors.colorWhite};
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &:hover,
  &[aria-current="page"] {
    text-decoration: underline;
    text-decoration-color: white;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }
`;
