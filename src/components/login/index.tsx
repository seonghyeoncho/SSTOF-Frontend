import React from "react";
import { SubText } from "../signup/styles";
import {
  Container,
  LoginContainer,
  Wrapper,
  InformationContainer,
  MainText,
  InputTitle,
  Input,
  LoginButton,
  ContinueWithGithubButton,
  GithubImage,
  ButtonText,
} from "./styles";
import GITHUB from "../../assets/GITHUB.png";
import { LoginProps } from "./interface";

const Login = ({
  email,
  emailRef,
  password,
  passwordRef,
  login,
  checkAllInputs,
}: LoginProps): JSX.Element => (
  <Container>
    <Wrapper>
      <LoginContainer>
        <InformationContainer>
          <MainText>SSUTackOverflow 로그인</MainText>
          <SubText>로그인하여 자유로운 질문 커뮤니티를 이용하세요!</SubText>
          <InputTitle>이메일</InputTitle>
          <Input
            type="email"
            id="email"
            placeholder="example@example.com"
            ref={emailRef}
            isValid={email.is_complete}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              email.onChange(event);
            }}
          />
          <InputTitle>비밀번호</InputTitle>
          <Input
            type="password"
            id="password"
            ref={passwordRef}
            isValid={password.is_complete}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              password.onChange(event);
            }}
          />
          <LoginButton
            isValid={checkAllInputs()}
            onClick={() => {
              checkAllInputs() ? login() : "";
            }}
          >
            로그인
          </LoginButton>
          <ContinueWithGithubButton
            href={`${process.env.REACT_APP_GITHUB_OAUTH_ADDRESS}`}
          >
            <GithubImage bgImage={GITHUB} />
            <ButtonText>Github로 계속하기</ButtonText>
          </ContinueWithGithubButton>
        </InformationContainer>
      </LoginContainer>
    </Wrapper>
  </Container>
);

export default Login;
