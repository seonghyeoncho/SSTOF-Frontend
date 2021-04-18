import React from "react";
import { Helmet } from "react-helmet";
import SignUpComponent from "../../components/signup";

const SignUp: React.FC = () => (
  <>
    <Helmet>
      <title>SSTOF | 회원 가입</title>
    </Helmet>
    <SignUpComponent />
  </>
);

export default SignUp;
