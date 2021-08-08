import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  bgColor: "rgb(250,250,250)",
  accent: "#0095f6",
  borderColor: "rgb(219, 219, 219)",
  color: "rgb(38, 38, 38)",
};

export const darkTheme = {
  color: "rgb(250,250,250)",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input{
      all: unset;
    }
    * {
      box-sizing: border-box;
    }
    body {
        background-color: ${(props) => props.theme.bgColor};
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
        color: ${(props) => props.theme.color};
    }
    a {
      text-decoration: none;
      color: inherit;
    }
`;
