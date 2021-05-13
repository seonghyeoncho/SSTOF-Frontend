import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  HomeLinkTitle,
  PublicLinkContainer,
  PublicLinks,
  PublicLinkTitle,
  Wrapper,
} from "./styles";

const SideNavBar: React.FC = () => (
  <Container>
    <Wrapper>
      <HomeLinkTitle>
        <Link to="/">Home</Link>
      </HomeLinkTitle>
      <PublicLinkContainer>
        <PublicLinkTitle>PUBLIC</PublicLinkTitle>
        <PublicLinks>
          <Link to="questions">Questions</Link>
          <Link to="tags">Tags</Link>
          <Link to="users">Users</Link>
        </PublicLinks>
      </PublicLinkContainer>
    </Wrapper>
  </Container>
);

export default SideNavBar;
