import React from "react";
import { HeaderAbout, Story, Cards, Arrow, Maps, Form } from "../../components";
import Bus from "../../components/animations/Bus";
import Notepad from "../../components/animations/Notepad";
import Oslo from "../../components/animations/Oslo";
import {
  headerAboutObj,
  storyObjOne,
  storyObjTwo,
  storyObjThree,
  storyObjFour,
  storyObjFive,
  cardObj,
} from "./AboutData";

const About = () => {
  return (
    <>
      <Arrow />
      <HeaderAbout {...headerAboutObj} />
      <Story {...storyObjOne} />
      <Oslo />
      <Story {...storyObjTwo} />
      <Story {...storyObjThree} />
      <Maps />
      <Story {...storyObjFour} />
      <Notepad />
      <Story {...storyObjFive} />
      <Cards {...cardObj} />
      <Form />
    </>
  );
};

export default About;
