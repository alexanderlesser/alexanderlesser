import styled from "styled-components";

export const HeaderBackground = styled.div`
  width: 100%;
  height: 90vh;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#1d1c24")};
  color: #fff;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  width: 25%;
  height: 20%;
  top: 80%;
  left: 70%;
  transform: rotate(10deg);

  @media screen and (max-width: 768px) {
    top: 80%;
    left: 70%;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: ${({ flexDirectionRow }) =>
    flexDirectionRow ? "row" : "row-reverse"};
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 10px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  height: 100%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0;
  }
`;

export const TextBox = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
`;

export const TopLine = styled.p`
  color: ${({ lightText }) => (lightText ? "#242129" : "#a9b3c1")};
  display: flex;
  justify-content: flex-start;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 1.1rem;
`;

export const MainText = styled.h1`
  margin-bottom: 24px;
  font-size: 5rem;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#5d12ff")};
`;

export const Description = styled.p`
  max-width: 90%;
  font-size: 1.7rem;
  line-height: 1.5rem;
  color: ${({ lightText }) => (lightText ? "#242129" : "#a9b3c1")};
`;

export const ImgBox = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
