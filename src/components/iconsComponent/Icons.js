import React from "react";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import IconRow from "./IconRow";
import { IconBox, IconWrapper } from "./Icons.elements";

const Icons = () => {
  return (
    <>
      <IconBox>
        <IconWrapper>
          <IconRow
            text="GitHub"
            href="https://github.com/alexanderlesser?tab=repositories"
          >
            <FaGithub />
          </IconRow>
        </IconWrapper>
        <IconWrapper>
          <IconRow
            text="Instagram"
            href="https://www.instagram.com/alexanderlesser/"
          >
            <FaInstagram />
          </IconRow>
        </IconWrapper>

        <IconWrapper>
          <IconRow
            text="Facebook"
            href="https://www.facebook.com/alexander.lesser.1"
          >
            <FaFacebook />
          </IconRow>
        </IconWrapper>
        <IconWrapper>
          <IconRow
            text="Linked In"
            href="https://www.linkedin.com/in/alexanderlesser-64523b184/"
          >
            <FaLinkedin />
          </IconRow>
        </IconWrapper>
      </IconBox>
    </>
  );
};

export default Icons;
