import React from "react";
import SvgAboutBackground from "../svgs/SvgAboutBackground";
import SvgAboutImage from "../svgs/SvgAboutHeaderImage";
import { Container } from "../../GlobalStyles";
import {
  HeaderBackground,
  HeaderRow,
  Column,
  TextBox,
  TopLine,
  MainText,
  Description,
  ImgBox,
  BackgroundImage,
} from "./Header.elements";

const AboutHeader = ({
  lightBg,
  flexDirectionRow,
  lightText,
  topLine,
  mainLine,
  description,
}) => {
  console.log(lightBg);

  return (
    <>
      <HeaderBackground lightBg={lightBg}>
        <BackgroundImage>
          <SvgAboutBackground />
        </BackgroundImage>
        <HeaderRow flexDirectionRow={flexDirectionRow}>
          <Column>
            <TextBox>
              <TopLine lightText={lightText}>{topLine}</TopLine>
              <MainText lightText={lightText}>{mainLine}</MainText>
              <Description lightText={lightText}>{description}</Description>
            </TextBox>
          </Column>
          <Column>
            <ImgBox>
              <SvgAboutImage />
            </ImgBox>
          </Column>
        </HeaderRow>
      </HeaderBackground>
    </>
  );
};

export default AboutHeader;
