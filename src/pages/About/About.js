import React from "react";
import {
  HeaderAbout,
  Story,
  Cards,
  Arrow,
  Maps,
  Form,
  Oslo,
  Notepad,
} from "../../components";
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
