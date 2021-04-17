import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SignUp from "../routes/signup";
import Header from "./header";
import Main from "./mainPage";
import Questions from "./questionsPage";
import Tags from "./tagsPage";
import Users from "./usersPage";

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
    <Header/>
    <RouterComponent />
  </Router>
);

export default RouterExporter;
