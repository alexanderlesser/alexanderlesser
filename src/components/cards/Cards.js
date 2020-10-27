import React from "react";
import { FaGithub, FaUniversity } from "react-icons/fa";
import CardItem from "./CardItem";
import { BsBook } from "react-icons/bs";
import { CardsSection, CardsWrapper, CardsContainer } from "./Cards.elements";

const Cards = ({ lightBg, lightCardColor }) => {
  return (
    <CardsSection lightBg={lightBg}>
      <CardsWrapper>
        <CardsContainer>
          <CardItem
            lightCardColor={lightCardColor}
            header="Bachelor thesis"
            description="My Bachelor thesis written in 2020 about Reactive systems"
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
            alt="study"
            href="https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1435711&dswid=6022"
          >
            <BsBook />
          </CardItem>
          <CardItem
            lightCardColor={lightCardColor}
            header="My GitHub"
            description="My GitHub where I upload my projects"
            src="https://images.unsplash.com/photo-1590595906931-81f04f0ccebb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
            alt="github"
            href="https://github.com/alexanderlesser?tab=repositories"
          >
            <FaGithub />
          </CardItem>
          <CardItem
            lightCardColor={lightCardColor}
            header="University"
            description="The University I went to and the education I received"
            src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
            href="https://www.ltu.se/edu/program/FKSYG/FKSYG-Systemvetenskap-kandidat-1.76726"
          >
            <FaUniversity />
          </CardItem>
        </CardsContainer>
      </CardsWrapper>
    </CardsSection>
  );
};
export default Cards;
