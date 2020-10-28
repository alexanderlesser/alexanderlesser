import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderBackground = styled.div`
  width: 100%;
  height: 90vh;
  background: ${({ lightBg }) => (lightBg ? "#a6acb3" : "#202121")};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 50px;
  }
`;

export const IconsBox = styled.div`
  width: 15%;
  height: 100%;

  @media screen and (max-width: 885px) {
    width: 20%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentBox = styled.div`
  padding-top: 20px;
  width: 85%;
  height: 100%;

  @media screen and (max-width: 885px) {
    width: 80%;
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

export const AboutColumn = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin: 0 20px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding-bottom: 100px;
    max-width: 100%;
    flex-basis: 100%;
    padding: 0 50px;
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
`;
