import React from "react";
import styled from "styled-components";

export const Card = styled.a`
  background: ${({ lightCardColor }) =>
    lightCardColor ? "#d5d8db" : "#242424"};
  transition: all 0.3s ease-out;
  cursor: pointer;

  -webkit-box-shadow: 0px 16px 30px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 16px 30px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 16px 30px 0px rgba(0, 0, 0, 0.4);

  width: 280px;
  height: 350px;
  text-decoration: none;
  border-radius: 5px;

  &:nth-child(2) {
    position: relative;
    z-index: 1;
    margin: 24px;

    @media screen and (max-width: 768px) {
      margin: 0;
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) and (min-width: 769px) {
    width: 200px;
    height: 270px;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  align-items: center;
  color: ${({ lightCardColor }) => (lightCardColor ? "#242129" : "#fff")};
`;

const ImgBox = styled.figure`
  width: 100%;
  height: 50%;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const CardTextBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (max-width: 960px) and (min-width: 769px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const CardText = styled.h3`
  display: flex;
  align-items: center;
  letter-spacing: 1.4px;
  margin-bottom: 10px;
  margin-left: 20px;
  font-size: 1.5rem;
  font-weight: 500;

  @media screen and (max-width: 960px) and (min-width: 769px) {
    font-size: 1.1rem;
    margin-left: 10px;
    margin-bottom: 5px;
  }
`;

const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  @media screen and (max-width: 960px) and (min-width: 769px) {
    margin-right: 10px;
  }
`;

const CardDesc = styled.p`
  margin: 2px 20px;
`;

const CardItem = ({
  children,
  lightCardColor,
  header,
  description,
  src,
  alt,
  href,
}) => {
  return (
    <Card lightCardColor={lightCardColor} href={href}>
      <CardBody lightCardColor={lightCardColor}>
        <ImgBox>
          <Image src={src} alt={alt} />
        </ImgBox>
        <CardTextBox>
          <CardText>
            <CardIcon>{children}</CardIcon>
            {header}
          </CardText>
          <CardDesc>{description}</CardDesc>
        </CardTextBox>
      </CardBody>
    </Card>
  );
};

export default CardItem;
