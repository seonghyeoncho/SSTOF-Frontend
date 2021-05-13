import React from "react";
import { Helmet } from "react-helmet";
import LoginComponent from "../../containers/login";

const Login: React.FC = () => (
  <>
    <Helmet>
      <title>SSTOF | 로그인</title>
    </Helmet>
    <LoginComponent />
  </>
);

export default Login;
