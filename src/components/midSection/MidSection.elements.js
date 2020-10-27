import styled from "styled-components";

export const MidSec = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ lightBg }) => (lightBg ? "#a6acb3" : "#202121")};
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

export const MidRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: ${({ flexDirectionRow }) =>
    flexDirectionRow ? "row" : "row-reverse"};
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;

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
  padding-top: 30px;

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

export const ImgBox = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
