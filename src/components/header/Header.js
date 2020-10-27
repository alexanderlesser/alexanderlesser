import React from "react";
import SvgHeaderImage from "../svgs/SvgHeaderImage";
import TextSection from "../textSection/TextSection";
import { HeaderBackground, HeaderRow, Column, ImgBox } from "./Header.elements";

const columnVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 10,
    transition: {
      duration: 0.5,
    },
  },
};

const Header = ({
  lightBg,
  flexDirectionRow,
  lightText,
  topLine,
  mainLine,
  description,
  mainImageColor,
  children,
  children2,
}) => {
  return (
    <>
      <HeaderBackground lightBg={lightBg}>
        <HeaderRow flexDirectionRow={flexDirectionRow}>
          <Column variants={columnVariants} initial="hidden" animate="visible">
            <TextSection
              lightText={lightText}
              topLine={topLine}
              mainLine={mainLine}
              description={description}
            >
              {children}
            </TextSection>
          </Column>
          <Column>
            <ImgBox>
              <SvgHeaderImage mainImageColor={mainImageColor} />
            </ImgBox>
          </Column>
        </HeaderRow>
      </HeaderBackground>
    </>
  );
};

export default Header;
