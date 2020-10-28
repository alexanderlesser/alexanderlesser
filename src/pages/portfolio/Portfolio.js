import React from "react";
import { Form, Header, Projects } from "../../components";
import SvgProjects from "../../components/svgs/SvgProjects";
import { headerObj, projectObj } from "./PortfolioData";

const Portfolio = () => {
  return (
    <>
      <Header {...headerObj}>
        <SvgProjects mainImageColor="#5d12ff" />
      </Header>
      <Projects {...projectObj} />
      <Form />
    </>
  );
};

export default Portfolio;
