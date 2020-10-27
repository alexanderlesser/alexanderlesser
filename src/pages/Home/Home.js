import React from "react";
import { Header, MidSection, Form } from "../../components";
import { headerObj, midSectionObj, midSectionObjTwo } from "./Data";
import SvgAboutImage from "../../components/svgs/SvgAboutHeaderImage";
import SvgProjects from "../../components/svgs/SvgProjects";

const Home = () => {
  return (
    <>
      <Header {...headerObj} />
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
