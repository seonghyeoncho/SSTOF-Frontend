import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import SignUp from "../routes/signup";
import Header from "./common/header";
import SideNavBar from "./common/sidebar";
import Main from "./main";
import Questions from "./questions";
import Tags from "./tags";
import Users from "./users";

const AppContainer = styled.div`
  width: 100%;
`;
const MainContainer = styled.div`
  max-width: 1280px;
  
  margin: auto;
  margin-top: 74px;
  display: grid;
  grid-template-columns: 1 1fr;

`;
const FooterContainer = styled.div`
`;

const RouterComponent: React.FC = () => (
  <Switch>
    <Route path="/" exact={true}>
      <Main />
    </Route>
    <Route path="/signup">
      <SignUp />
    </Route>
    <Route path="/questions">
      <Questions/>
    </Route>
    <Route path="/questions/ask">
      <Questions/>
    </Route>
    <Route path="/tags">
      <Tags/>
    </Route>
    <Route path="/users">
      <Users/>
    </Route>
    <Redirect path="*" to="/" />
  </Switch>
);

const RouterExporter: React.FC = () => (
  <Router>
    <AppContainer>
      <Header/>

      <MainContainer>
        <SideNavBar/>
        <RouterComponent />
      </MainContainer>

      <FooterContainer>

      </FooterContainer>
    </AppContainer>
  </Router>
);

export default RouterExporter;
