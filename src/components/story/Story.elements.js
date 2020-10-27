import styled from "styled-components";

export const StorySection = styled.div`
  position: relative;
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#a6acb3" : "#202121")};

  @media screen and (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 30px;
  }
`;

export const StoryRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ flexDirectionRow }) =>
    flexDirectionRow ? "row" : "row-reverse"};
`;

export const Column = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
  }
`;

export const TextBox = styled.div`
  max-width: 540px;
  max-width: 100%;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;
