import React from "react";
import { SiJavascript } from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";
import StyledIcon from "../svgs/StyledIcon";
import {
  ProjectBox,
  Row,
  Column,
  InfoSection,
  ProjectName,
  Description,
  IconBox,
  IconCardBox,
  GithubBox,
  GithubIconBox,
  LinkTag,
  ImgTag,
} from "./Project.elements";

const Project = ({ lightBg, flexDirectionRow, lightText }) => {
  return (
    <>
      <ProjectBox lightBg={lightBg}>
        <Row flexDirectionRow={flexDirectionRow}>
          <Column>
            <InfoSection>
              <ProjectName lightText={lightText}>Portfolio</ProjectName>
              <Description lightText={lightText}>
                My portfolio developed with React as framework,
                Styled-Components and Framer Motion for animations.
              </Description>
            </InfoSection>

            <GithubBox>
              <GithubIconBox>
                <LinkTag
                  lightText={lightText}
                  href="https://github.com/alexanderlesser/alexanderlesser.se"
                >
                  <FaGithub />
                </LinkTag>
              </GithubIconBox>
              <Description lightText={lightText}>
                Find this project on GitHub
              </Description>
            </GithubBox>
            <IconBox>
              <IconCardBox lightText={lightText}>
                <SiJavascript />
                <FaReact />
                <StyledIcon iconColor="#242129" />
              </IconCardBox>
            </IconBox>
          </Column>
          <Column>
            <ImgTag src="images/projectPortfolio.png" />
          </Column>
        </Row>
      </ProjectBox>
    </>
  );
};

export default Project;
