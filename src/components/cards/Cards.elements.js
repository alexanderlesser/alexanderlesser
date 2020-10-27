import styled from "styled-components";

export const CardsSection = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ lightBg }) => (lightBg ? "#a6acb3" : "#202121")};

  @media screen and (max-width: 768px) {
    padding: 0;
    padding-top: 50px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
  }
`;
