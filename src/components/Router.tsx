import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SignUp from "../routes/signup";
import Header from "./header";
import Main from "./main";

const RouterComponent: React.FC = () => (
  <Switch>
    <Route path="/" exact={true}>
      <Main />
    </Route>
    <Route path="/signup">
      <SignUp />
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
