import React from "react";
import Icons from "../iconsComponent/Icons";
import SvgAboutHeaderImage from "../svgs/SvgAboutHeaderImage";
import TextSection from "../textSection/TextSection";
import {
  HeaderBackground,
  HeaderRow,
  AboutColumn,
  ImgBox,
  IconsBox,
  ContentBox,
} from "./HeaderAbout.elements";

const columnVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 10,
    transition: {
      delay: 0,
      duration: 0.5,
    },
  },
};

const HeaderAbout = ({
  lightBg,
  flexDirectionRow,
  lightText,
  topLine,
  mainLine,
  description,
  mainImageColor,
}) => {
  return (
    <>
      <HeaderBackground lightBg={lightBg}>
        <IconsBox>
          <Icons />
        </IconsBox>
        <ContentBox>
          <HeaderRow flexDirectionRow={flexDirectionRow}>
            <AboutColumn
              variants={columnVariants}
              initial="hidden"
              animate="visible"
            >
              <TextSection
                lightText={lightText}
                topLine={topLine}
                mainLine={mainLine}
                description={description}
              />
            </AboutColumn>
            <AboutColumn>
              <ImgBox>
                <SvgAboutHeaderImage mainImageColor={mainImageColor} />
              </ImgBox>
            </AboutColumn>
          </HeaderRow>
        </ContentBox>
      </HeaderBackground>
    </>
  );
};

export default HeaderAbout;
