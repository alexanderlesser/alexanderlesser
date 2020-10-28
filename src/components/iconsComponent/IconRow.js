import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.8,
    },
  },
};

const IconHolder = styled(motion.div)`
  position: relative;
  z-index: 3;
  height: 100%;
  margin-left: 20px;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 325px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const ATag = styled.a`
  color: #a9b3c1;
  height: 100%;
  display: flex;
  align-items: center;
`;

const IconDescription = styled.h3`
  position: relative;
  z-index: 2;
  color: #a9b3c1;
  font-size: 0.7rem;
  font-weight: 400;
  display: ${({ isHovering }) => (isHovering ? "visible" : "none")};
  user-select: none;
  overflow: hidden;
  cursor: default;

  @media screen and (min-width: 769px) {
    animation: ${({ isHovering }) =>
      isHovering ? "showtext 0.8s ease" : "textleave 1s ease"};
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }

  @media screen and (max-width: 768px) {
    display: none;
    margin: 0;
  }

  @keyframes showtext {
    from {
      transform: translateX(600px);
      display: hidden;
    }

    to {
      transorm: translateX(0);
      display: visible;
    }
  }
`;

const IconRow = ({ children, text, href }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = () => {
    setIsHovering(!isHovering);
  };

  return (
    <>
      <IconHolder
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <ATag href={href}>{children}</ATag>
      </IconHolder>
      <IconDescription isHovering={isHovering}>{text}</IconDescription>
    </>
  );
};

export default IconRow;
