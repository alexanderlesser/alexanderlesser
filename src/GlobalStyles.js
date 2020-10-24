import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    font-size: 10px;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}
`;

export const Container = styled.div`
  width: 100%;
  margin-left: 30px;
  margin-right: 30px;
`;

export default GlobalStyle;
