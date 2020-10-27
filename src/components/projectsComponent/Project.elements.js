import styled from "styled-components";

export const ProjectBox = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* flex-direction: ${({ flexDirectionRow }) =>
    flexDirectionRow ? "row" : "row-reverse"}; */
  flex-direction: row-reverse;
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
  height: 100%;
`;

export const ProjectName = styled.h1``;

export const Description = styled.p``;

export const IconBox = styled.div``;
