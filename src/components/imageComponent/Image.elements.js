import styled from "styled-components";

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgTag = styled.img`
  position: relative;
  width: 36vh;
  height: 36vh;
  background: grey;
  border-radius: 5px;
  background-size: cover;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;
  overflow: hidden;
  transition: all 1s ease;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 28vh;
    height: 28vh;
  }

  -ms-transform: ${({ isClicked, imageRotate }) =>
    isClicked ? "scale(1.5)" : `rotate(${imageRotate})`};
  transform: ${({ isClicked, imageRotate }) =>
    isClicked ? "scale(1.5)" : `rotate(${imageRotate})`};

  z-index: ${({ isClicked }) => (isClicked ? "2" : `1`)};
`;

export const ImgTagTwo = styled.img`
  width: 36vh;
  height: 36vh;
  background: grey;
  border-radius: 5px;
  background-size: cover;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;
  overflow: hidden;
  transition: all 1s ease;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 28vh;
    height: 28vh;
  }
  -ms-transform: ${({ isClickedTwo, secondImageRotate }) =>
    isClickedTwo ? "scale(1.5)" : `rotate(${secondImageRotate})`};
  transform: ${({ isClickedTwo, secondImageRotate }) =>
    isClickedTwo ? "scale(1.5)" : `rotate(${secondImageRotate})`};

  z-index: ${({ isClickedTwo }) => (isClickedTwo ? "2" : `1`)};
`;

export const ImgTagThree = styled.img`
  width: 36vh;
  height: 36vh;
  background: grey;
  border-radius: 5px;
  background-size: cover;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.8);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;
  overflow: hidden;
  transition: all 1s ease;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 28vh;
    height: 28vh;
  }

  -ms-transform: ${({ isClickedThree, thirdImageRotate }) =>
    isClickedThree ? "scale(1.5)" : `rotate(${thirdImageRotate})`};
  transform: ${({ isClickedThree, thirdImageRotate }) =>
    isClickedThree ? "scale(1.5)" : `rotate(${thirdImageRotate})`};

  z-index: ${({ isClickedThree }) => (isClickedThree ? "2" : `1`)};
`;

export const ImgTagFour = styled.img`
  width: 36vh;
  height: 36vh;
  background: grey;
  border-radius: 5px;
  background-size: cover;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;
  overflow: hidden;
  transition: all 1s ease;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 28vh;
    height: 28vh;
  }

  -ms-transform: ${({ isClickedFour, fourthImageRotate }) =>
    isClickedFour ? "scale(1.5)" : `rotate(${fourthImageRotate})`};
  transform: ${({ isClickedFour, fourthImageRotate }) =>
    isClickedFour ? "scale(1.5)" : `rotate(${fourthImageRotate})`};

  z-index: ${({ isClickedFour }) => (isClickedFour ? "2" : `1`)};
`;
