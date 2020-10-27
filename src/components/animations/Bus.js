import React from "react";
import styled from "styled-components";
import SvgBus from "../svgs/SvgBus";
import Sign from "../svgs/Sign";
import { motion } from "framer-motion";

const busVariants = {
  visible: {
    x: [0, -900, -900, -900, 0, 0, 0],
    rotateY: [0, 0, -180, -180, -180, 0, 0],
    transition: {
      duration: 12,
      repeat: Infinity,
    },
  },
};

const AnimationBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 80%;
  height: 17vh;
  border-bottom: 2px solid #000;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const SignBox = styled.div`
  width: 50%;
  height: 100%;
`;

const BusBox = styled(motion.div)`
  width: 50%;
  height: 100%;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Bus = () => {
  return (
    <AnimationBox>
      <SignBox>
        <Sign />
      </SignBox>
      <BusBox variants={busVariants} animate="visible">
        <SvgBus />
      </BusBox>
    </AnimationBox>
  );
};

export default Bus;
