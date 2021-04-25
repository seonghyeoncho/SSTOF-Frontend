import React from "react";
import SideNavBar from "../common/sidebar";
import {
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
        <SideNavBar></SideNavBar>
      </SideNavBarContianer>
      <QuestionsContainer>
        <Title>Questions</Title>
      </QuestionsContainer>
    </Wrapper>
  </Container>
);

export default Questions;
