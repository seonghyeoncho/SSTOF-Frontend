import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SignUp from "../routes/signup";
import Header from "./common/header";
import Main from "./main";
import Questions from "./questions";
import Tags from "./tags";
import Users from "./users";

const RouterComponent: React.FC = () => (
  <Switch>
    <Route path="/" exact={true}>
      <Main />
    </Route>
    <Route path="/signup">
      <SignUp />
    </Route>
    <Route path="/questions">
      <Questions />
    </Route>
    <Route path="/questions/ask">
      <Questions />
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
    <Header />

    <RouterComponent />
  </Router>
);

export default RouterExporter;
