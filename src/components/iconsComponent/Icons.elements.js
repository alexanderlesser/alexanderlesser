import styled from "styled-components";

export const IconBox = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  background: #202121;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const IconWrapper = styled.div`
  width: 100%;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row-reverse;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
