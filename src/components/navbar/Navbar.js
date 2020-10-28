import React, { useState } from "react";
import LogoIcon from "../svgs/LogoIcon";
import { FaTimes, FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenuBox,
  NavMenu,
  NavItem,
  NavLinks,
  MobileMenuIcon,
  BurgerBox,
  MobileIconBox,
} from "./Navbar.elements";

const navVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/" onClick={handleClick}>
            <LogoIcon />
          </NavLogo>
          <MobileIconBox onClick={handleClick}>
            <MobileMenuIcon>
              <BurgerBox onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </BurgerBox>
            </MobileMenuIcon>
          </MobileIconBox>
          <NavMenuBox onClick={handleClick} click={click}>
            <NavMenu>
              <NavItem
                variants={navVariants}
                initial="hidden"
                animate="visible"
              >
                <NavLinks to="/">Home</NavLinks>
              </NavItem>

              <NavItem
                variants={navVariants}
                initial="hidden"
                animate="visible"
              >
                <NavLinks to="/about">About Me</NavLinks>
              </NavItem>

              <NavItem
                variants={navVariants}
                initial="hidden"
                animate="visible"
              >
                <NavLinks to="/portfolio">Portfolio</NavLinks>
              </NavItem>
            </NavMenu>
          </NavMenuBox>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
