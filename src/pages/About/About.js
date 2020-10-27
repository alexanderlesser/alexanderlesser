import React from "react";
import { HeaderAbout, Story, Cards, Arrow, Maps, Form } from "../../components";
import Bus from "../../components/animations/Bus";
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
      <Bus />
      <Story {...storyObjTwo} />
      <Story {...storyObjThree} />
      <Maps />
      <Story {...storyObjFour} />
      <Story {...storyObjFive} />
      <Cards {...cardObj} />
      <Form />
    </>
  );
};

export default About;
