import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectBox = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ lightBg }) => (lightBg ? "#a6acb3" : "#202121")};
`;

export const Row = styled.div`
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
  flex-direction: column;
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

export const InfoSection = styled.div`
  width: 100%;
  display: flex;
  margin: 30px 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ProjectName = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  line-height: 1.2;
  color: ${({ lightText }) => (lightText ? "#242129" : "#5d12ff")};

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled(motion.p)`
  max-width: 100%;
  font-size: 1.2rem;
  list-style: none;
  line-height: 1.5rem;
  color: ${({ lightText }) => (lightText ? "#242129" : "#a9b3c1")};

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const IconBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const GithubBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LinkTag = styled.a`
  color: ${({ lightText }) => (lightText ? "#242129" : "#a9b3c1")};
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const GithubIconBox = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

export const IconCardBox = styled.div`
  width: 100%;
  color: ${({ lightText }) => (lightText ? "#242129" : "#a9b3c1")};
  display: flex;
  justify-content: space-between;
  font-size: 4rem;
`;

export const ImgTag = styled.img`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
  }
`;
