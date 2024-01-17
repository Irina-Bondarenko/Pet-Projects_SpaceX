import { createGlobalStyle } from "styled-components";
import * as colors from "./colors";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
    font-family: 'Syne Regular';
    src: url('../fonts/Syne/Syne-Regular.ttf') format('ttf');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Syne-SemiBold';
    src: url('../fonts/Syne/Syne-Regular.ttf') format('ttf');
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: 'Syne-ExtraBold';
    src: url('../fonts/Syne/Syne-Regular.ttf') format('ttf');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: url('../fonts/Lato/Lato-Thin.ttf') format('ttf');
    font-weight: 100;
    font-style: normal;
}

body {
    font-family: 'Syne', sans-serif;
}

a {
    text-decoration: none;
    color:${colors.colorBlack};
    display: inline-block;
}
`;
