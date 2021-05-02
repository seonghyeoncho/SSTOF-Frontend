import React from "react";
import { Link } from "react-router-dom";
import SideNavBar from "../common/sidebar";
import {
  AskButtonContainer,
  Container,
  QuestionsContainer,
  SideNavBarContianer,
  Title,
  Wrapper,
} from "./styles";

const Questions: React.FC = () => (
  <Container>
    <Wrapper>
      <SideNavBarContianer>
        <SideNavBar/>
      </SideNavBarContianer>
      <QuestionsContainer>
        <Title>Questions</Title>
        <AskButtonContainer>
          <Link to="/ask">Ask Question!</Link>
        </AskButtonContainer>
      </QuestionsContainer>
    </Wrapper>
  </Container>
);

export default Questions;
