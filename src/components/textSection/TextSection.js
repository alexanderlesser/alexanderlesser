import React from "react";
import {
  TextBox,
  TopLine,
  MainText,
  Description,
  ButtonBox,
} from "./TextSection.elements";

const descvariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.8,
    },
  },
};

const TextSection = ({
  lightText,
  topLine,
  mainLine,
  description,
  children,
}) => {
  return (
    <>
      <TextBox>
        <TopLine lightText={lightText}>{topLine}</TopLine>
        <MainText lightText={lightText}>{mainLine}</MainText>
        <Description
          variants={descvariants}
          initial="hidden"
          animate="visible"
          lightText={lightText}
        >
          {description}
        </Description>
        <ButtonBox>{children}</ButtonBox>
      </TextBox>
    </>
  );
};

export default TextSection;
