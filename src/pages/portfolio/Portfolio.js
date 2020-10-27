import React from "react";
import { MidSection } from "../../components";
import SvgProjects from "../../components/svgs/SvgProjects";
import { headerObj } from "./PortfolioData";

const Portfolio = () => {
  return (
    <>
      <MidSection {...headerObj}>
        <SvgProjects mainImageColor="#5d12ff" />
      </MidSection>
    </>
  );
};

export default Portfolio;
