import React from "react";
import SideNavBar from "../common/sidebar";
import {
  Container,
  SideNavBarContianer,
  Title,
  UsersContainer,
  Wrapper,
} from "./styles";

const Users: React.FC = () => (
  <Container>
    <Wrapper>
      <SideNavBarContianer>
        <SideNavBar />
      </SideNavBarContianer>
      <UsersContainer>
        <Title>Users</Title>
      </UsersContainer>
    </Wrapper>
  </Container>
);

export default Users;
