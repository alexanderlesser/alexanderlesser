import React from "react";
import TextSection from "../textSection/TextSection";
import Image from "../imageComponent/Image";
import { StorySection, StoryRow, Column, TextBox } from "./Story.elements";
import { Container } from "../../GlobalStyles";

const Story = ({
  lightBg,
  flexDirectionRow,
  lightText,
  topLine,
  mainLine,
  description,
  imageRotate,
  secondImageRotate,
  thirdImageRotate,
  imgOne,
  imgTwo,
  imgThree,
}) => {
  return (
    <StorySection lightBg={lightBg}>
      <Container>
        <StoryRow flexDirectionRow={flexDirectionRow}>
          <Column>
            <TextBox>
              <TextSection
                lightText={lightText}
                topLine={topLine}
                mainLine={mainLine}
                description={description}
              />
            </TextBox>
          </Column>
          <Column>
            <Image
              imageRotate={imageRotate}
              secondImageRotate={secondImageRotate}
              thirdImageRotate={thirdImageRotate}
              imgOne={imgOne}
              imgTwo={imgTwo}
              imgThree={imgThree}
            />
          </Column>
        </StoryRow>
      </Container>
    </StorySection>
  );
};

export default Story;
