import React from "react";
import SideNavBar from "../common/sidebar";
import {
  Container,
  SideNavBarContianer,
  TagsContainer,
  Title,
  Wrapper,
} from "./styles";

const Tags: React.FC = () => (
  <Container>
    <Wrapper>
      <SideNavBarContianer>
        <SideNavBar />
      </SideNavBarContianer>
      <TagsContainer>
        <Title>Tags</Title>
      </TagsContainer>
    </Wrapper>
  </Container>
);

export default Tags;
