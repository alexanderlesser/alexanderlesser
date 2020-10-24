import React, { useState } from "react";
import LogoIcon from "../svgs/LogoIcon";
import {
  Nav,
  NavbarContainer,
  IconBox,
  MobileMenuIcon,
  NavMenu,
  NavItem,
  NavLinks,
  BurgerMenu,
  Cross,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <IconBox to="/">
            <LogoIcon />
          </IconBox>
          <MobileMenuIcon onClick={handleClick}>
            {click ? <Cross /> : <BurgerMenu />}
          </MobileMenuIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/about">About me</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/portfolio">Portfolio</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
