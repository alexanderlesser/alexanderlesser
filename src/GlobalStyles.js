import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

body {
  background-color: #a6acb3;
}
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    padding-right: 40px;
    padding-left: 40px;
    padding-top: 50px;
  }
`;

export const ButtonLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  text-decoration: none;
  color: ${({ dark }) => (dark ? "#fff" : "#242129")};
  border: ${({ dark }) => (dark ? "2px solid #fff" : "none")};
  background: ${({ dark }) => (dark ? "none" : "#fff")};
`;

export default GlobalStyle;
