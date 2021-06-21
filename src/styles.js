import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "rgb(250,250,250)",
};

export const darkTheme = {
  fontColor: "rgb(250,250,250)",
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
    }
    a {
      text-decoration: none;
    }
`;
