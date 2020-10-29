import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Btn = styled.button`
  cursor: pointer;
  width: 99%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  text-decoration: none;
  border-radius: 5px;
  color: ${({ primary }) => (primary ? "#fff" : "#242129")};
  border: ${({ primary }) =>
    primary ? "2px solid #fff" : "2px solid #242129"};
  /* background: ${({ primary }) => (primary ? "none" : "#242129")}; */
  background: none;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }

  @media screen and (min-width: 769px) {
    &:hover {
      color: ${({ primary }) => (primary ? "#242129" : "#fff")};
      background: ${({ primary }) => (primary ? "#fff" : "#242129")};
    }
  }
`;

const LinkTag = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: none;
  background: none;
`;

function Button({ primary, btnText, to }) {
  return (
    <>
      <LinkTag to={to}>
        <Btn primary={primary}>{btnText}</Btn>
      </LinkTag>
    </>
  );
}

export default Button;
