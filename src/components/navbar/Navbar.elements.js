import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Nav = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 10vh;
  background: #202121;
  z-index: 999;
`;

export const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 768px) {
    padding-right: 40px;
    padding-left: 40px;
  }
`;

export const NavLogo = styled(Link)`
  width: 10vw;
  height: 100%;
`;

export const MobileIconBox = styled.div`
  position: relative;
  height: 100%;
  width: 6vh;
  display: none;
  z-index: 10;

  @media screen and (max-width: 960px) {
    display: block;
    cursor: pointer;
  }
`;

export const MobileMenuIcon = styled(motion.div)`
  height: 70%;
  width: 5vw;
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BurgerBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavMenuBox = styled(motion.div)`
  height: 10vh;

  @media screen and (max-width: 960px) {
    position: absolute;
    width: 100%;
    height: 90vh;
    top: 10vh;
    display: flex;
    flex-direction: column;
    left: ${({ click }) => (click ? 0 : "-100vw")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #202121;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }
`;

export const NavItem = styled(motion.li)`
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
  }
`;

export const NavLinks = styled(Link)`
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  position: relative;
  padding: 10px 20px;

  @media screen and (min-width: 961px) {
    &::after {
      /* create pseudo element */
      color: #5d12ff;
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: currentColor;

      transform: scaleX(0); /* Scales it 0.5 on both sides */
      transform-origin: right; /* moves it to the left */
      transition: transform 250ms ease-in; /* creates transition between ::after and hover::after */
    }

    &:hover::after {
      transform: scaleX(1); /* makes underline go to full length*/
      transform-origin: left; /* makes transition move out from left to right */
    }
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1.25;
    display: table;
    width: 100%;

    &:hover {
      color: #5d12ff;
      transition: all 0.3s ease;
    }
  }
`;
