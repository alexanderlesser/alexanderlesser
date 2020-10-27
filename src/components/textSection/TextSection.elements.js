import styled from "styled-components";
import { motion } from "framer-motion";

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  max-width: 100%;
`;

export const TopLine = styled.p`
  color: ${({ lightText }) => (lightText ? "#242129" : "#a9b3c1")};
  display: flex;
  justify-content: flex-start;
  font-size: 1.2rem;
  line-height: 30px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 1.1rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const MainText = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  line-height: 1.2;
  color: ${({ lightText }) => (lightText ? "#242129" : "#5d12ff")};

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled(motion.p)`
  max-width: 90%;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: ${({ lightText }) => (lightText ? "#242129" : "#a9b3c1")};

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonBox = styled.div`
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 50px;
`;
