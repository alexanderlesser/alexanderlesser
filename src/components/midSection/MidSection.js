import React from "react";
import TextSection from "../textSection/TextSection";
import { MidSec, MidRow, Column, ImgBox } from "./MidSection.elements";
import Button from "../buttons/Button";

const MidSection = ({
  lightBg,
  flexDirectionRow,
  lightText,
  topLine,
  mainLine,
  description,
  children,
  buttonPrimary,
  buttonText,
  path,
}) => {
  return (
    <>
      <MidSec lightBg={lightBg}>
        <MidRow flexDirectionRow={flexDirectionRow}>
          <Column>
            <TextSection
              lightText={lightText}
              topLine={topLine}
              mainLine={mainLine}
              description={description}
            >
              <Button primary={buttonPrimary} btnText={buttonText} to={path} />
            </TextSection>
          </Column>
          <Column>
            <ImgBox>{children}</ImgBox>
          </Column>
        </MidRow>
      </MidSec>
    </>
  );
};

export default MidSection;
