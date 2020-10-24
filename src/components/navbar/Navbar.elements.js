import styled from "styled-components";
import { Container } from "../../GlobalStyles";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  position: absolute;
  z-index: 999;
  background: #202121;
  color: #fff;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  text-transform: uppercase;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;

  ${Container}
`;

export const IconBox = styled.div`
  width: 7rem;
  height: 100%;
  padding-left: 5px;
  cursor: pointer;
`;

export const MobileMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const BurgerMenu = styled(FaBars)`
  font-size: 3rem;
`;

export const Cross = styled(FaTimes)`
  font-size: 3rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 10vh;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s;
    background: #202121;
  }
`;

export const NavItem = styled.li`
  height: 10vh;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #5d12ff;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  font-size: 2rem;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    display: table;
    width: 100%;

    &:hover {
      color: #5d12ff;
      transition: all 0.3s ease;
    }
  }
`;
