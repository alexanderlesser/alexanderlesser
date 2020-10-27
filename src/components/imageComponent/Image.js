import React, { useState } from "react";
import { ImageBox, ImgTag, ImgTagTwo, ImgTagThree } from "./Image.elements";

const Image = ({
  imageRotate,
  secondImageRotate,
  thirdImageRotate,
  imgOne,
  imgTwo,
  imgThree,
}) => {
  const [clicked, setClicked] = useState(false);
  const [clickedTwo, setClickedTwo] = useState(false);
  const [clickedThree, setClickedThree] = useState(false);

  const handleClick = () => {
    if (clickedTwo || clickedThree === true) {
      setClickedTwo(false);
      setClickedThree(false);
    }
    setClicked(!clicked);
  };

  const handleClickTwo = () => {
    if (clicked || clickedThree === true) {
      setClicked(false);
      setClickedThree(false);
    }
    setClickedTwo(!clickedTwo);
  };

  const handleClickThree = () => {
    if (clicked || clickedTwo === true) {
      setClicked(false);
      setClickedTwo(false);
    }
    setClickedThree(!clickedThree);
  };
  return (
    <>
      <ImageBox>
        <ImgTag
          onMouseDown={handleClick}
          isClicked={clicked}
          imageRotate={imageRotate}
          src={imgOne}
          alt="image"
        />
        <ImgTagTwo
          onMouseDown={handleClickTwo}
          isClickedTwo={clickedTwo}
          secondImageRotate={secondImageRotate}
          src={imgTwo}
          alt="image"
        />
        <ImgTagThree
          onMouseDown={handleClickThree}
          isClickedThree={clickedThree}
          thirdImageRotate={thirdImageRotate}
          src={imgThree}
          alt="image"
        />

        {/* <ImgTagFour
          onMouseDown={handleClickFour}
          isClickedFour={clickedFour}
          fourthImageRotate={fourthImageRotate}
          src="images/img4.png"
          alt="image"
        /> */}
      </ImageBox>
    </>
  );
};

export default Image;
