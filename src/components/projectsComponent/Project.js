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

const linkVariants = {
  hover: {
    color: "#5d12ff",
  },
};

const Project = ({ lightBg, flexDirectionRow, lightText }) => {
  return (
    <>
      <ProjectBox lightBg={lightBg}>
        <Row flexDirectionRow={flexDirectionRow}>
          <Column>
            <InfoSection>
              <ProjectName lightText={lightText}>
                Portfolio - Website
              </ProjectName>
              <Description lightText={lightText}>
                My portfolio website developed with React as framework,
                Styled-Components and Framer Motion for animations.
              </Description>
            </InfoSection>

            <LinkTag
              lightText={lightText}
              href="https://github.com/alexanderlesser/alexanderlesser.se"
            >
              <GithubBox>
                <GithubIconBox>
                  <FaGithub />
                </GithubIconBox>
                <Description
                  lightText={lightText}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  Find this project on GitHub
                </Description>
              </GithubBox>
            </LinkTag>
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
