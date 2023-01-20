import { ThemeType } from "@/hooks/useTheme/themes";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  :root {
    font-family: "Montserrat", sans-serif;
  background-color: ${(props) => props.theme.backgroundColor};
  }
  
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
  }

  a:-webkit-any-link {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }
  `;
