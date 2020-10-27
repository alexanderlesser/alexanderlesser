import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";

const arrowVariants = {
  visible: {
    y: [20, 0],
    transition: { delay: 0.5, yoyo: Infinity },
  },
};

const ArrowBox = styled(motion.div)`
  position: absolute;
  top: 80%;
  left: 2%;
  height: 70px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 8rem;
  border-radius: 5px;
  border-top: 2px solid #fff;

  @media screen and (max-width: 768px) {
    top: 65%;
    font-size: 5rem;
    width: 30px;
  }
`;

const ArrowIcon = styled(motion.div)`
  position: relative;
  right: 13%;
  font-size: 3rem;
  width: 100%;
  height: 80%;

  @media screen and (max-width: 768px) {
    right: 30%;
  }
`;

const Arrow = () => {
  return (
    <>
      <ArrowBox>
        <ArrowIcon variants={arrowVariants} animate="visible">
          <BsArrowDown />
        </ArrowIcon>
      </ArrowBox>
    </>
  );
};

export default Arrow;
