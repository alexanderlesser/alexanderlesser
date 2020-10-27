import React from "react";
import { IoIosAirplane } from "react-icons/io";
import { motion } from "framer-motion";
import styled from "styled-components";
import MapTwo from "../svgs/PlaneMap";

const MapAnimationBox = styled.div`
  position: relative;
  width: 80vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0vw;
  top: 0vh;

  @media screen and (max-width: 768px) {
    width: 60vw;
    height: 30vh;
    top: 10vh;
    left: 10vw;
    z-index: 1;
  }

  @media screen and (max-width: 495px) {
    width: 80vw;
    height: 30vh;
    top: 10vh;
    left: 10vw;
    z-index: 1;
  }
`;

const MapBox = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Maps = () => {
  return (
    <>
      <MapAnimationBox>
        <MapBox>
          <MapTwo />
        </MapBox>
      </MapAnimationBox>
    </>
  );
};

export default Maps;
