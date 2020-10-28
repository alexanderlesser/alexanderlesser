import React from "react";
import { Header, MidSection, Form } from "../../components";
import { headerObj, midSectionObj, midSectionObjTwo } from "./Data";
import SvgAboutImage from "../../components/svgs/SvgAboutHeaderImage";
import SvgProjects from "../../components/svgs/SvgProjects";
import SvgHeaderImage from "../../components/svgs/SvgHeaderImage";

const Home = () => {
  return (
    <>
      <Header {...headerObj}>
        <SvgHeaderImage mainImageColor="#5d12ff" />
      </Header>
      <MidSection {...midSectionObj}>
        <SvgAboutImage mainImageColor="#5d12ff" />
      </MidSection>
      <MidSection {...midSectionObjTwo}>
        <SvgProjects mainImageColor="#5d12ff" />
      </MidSection>
      <Form />
    </>
  );
};

export default Home;
