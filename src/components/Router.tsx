import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import SignUp from "../routes/signup";
import AskQuestion from "./ask";
import Login from "../routes/login";
import Header from "./common/header";
import Main from "./main";
import Questions from "./questions";
import Tags from "./tags";
import Users from "./users";

const AppContainer = styled.div`
  width: 100%;
`;
const MainContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  margin-top: 74px;
  display: flex;
`;
const FooterContainer = styled.div``;

const RouterComponent: React.FC = () => (
  <Switch>
    <Route path="/" exact={true}>
      <Main />
    </Route>
    <Route path="/signup">
      <SignUp />
    </Route>
    <Route path="/questions" component={Questions} />
    <Route path="/ask">
      <AskQuestion />
    </Route>
    <Route path="/tags">
      <Tags />
    </Route>
    <Route path="/users">
      <Users />
    </Route>
    <Redirect path="*" to="/" />
  </Switch>
);

const RouterExporter: React.FC = () => (
  <Router>
    <AppContainer>
      <Header />
      <MainContainer>
        <RouterComponent />
      </MainContainer>
      <FooterContainer></FooterContainer>
    </AppContainer>
  </Router>
);

export default RouterExporter;
