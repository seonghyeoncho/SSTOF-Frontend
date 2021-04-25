import React, { useEffect } from "react";
import { message } from "antd";
import { useLocation } from "react-router";
import GITHUB from "../../assets/GITHUB.png";
import { StatusCodes } from "http-status-codes";
import {
  Container,
  InformationContainer,
  MainText,
  SignupContainer,
  SubText,
  Wrapper,
  Input,
  InputTitle,
  SignUpButton,
  SignupWithGithubButton,
  ButtonText,
  GithubImage,
} from "./styles";
import { SignupProps } from "./interface";

const SignUp = ({
  email,
  emailRef,
  password,
  passwordRef,
  name,
  nameRef,
  signUp,
  checkAllInputs,
}: SignupProps): JSX.Element => {
  const location = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const error_code = query.get("error_code");
    if (error_code !== null) {
      switch (parseInt(error_code)) {
        case StatusCodes.BAD_REQUEST:
          message.error(
            "해당 Github 계정은 공개 이메일이 설정되어 있지 않습니다.",
          );
          break;
        case StatusCodes.NOT_ACCEPTABLE:
          message.error("해당 이메일은 일반 회원 가입으로 가입되어 있습니다.");
          break;
        case StatusCodes.INTERNAL_SERVER_ERROR:
          message.error(
            "알 수 없는 문제가 발생했습니다. 관리자에게 문의해 주세요.",
          );
          break;
        default:
          message.error("알 수 없는 오류가 발생했습니다.");
          break;
      }
    }
  }, [location]);

  return (
    <Container>
      <Wrapper>
        <SignupContainer>
          <InformationContainer>
            <MainText>SSUTackOverflow 회원 가입</MainText>
            <SubText>
              회원 가입하여 자유로운 질문 커뮤니티를 이용하세요!
            </SubText>
            <InputTitle>이메일</InputTitle>
            <Input
              type="email"
              id="email"
              placeholder="example@example.com"
              ref={emailRef}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                email.onChange(event);
              }}
              isValid={email.is_complete}
            />
            <InputTitle>비밀 번호</InputTitle>
            <Input
              type="password"
              id="password"
              ref={passwordRef}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                password.onChange(event);
              }}
              isValid={password.is_complete}
            />
            <InputTitle>이름(닉네임)</InputTitle>
            <Input
              type="name"
              id="name"
              ref={nameRef}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                name.onChange(event);
              }}
              isValid={name.is_complete}
            />
            <SignUpButton
              isValid={checkAllInputs()}
              onClick={() => {
                checkAllInputs() ? signUp() : "";
              }}
            >
              회원 가입
            </SignUpButton>
            <SignupWithGithubButton
              href={`${process.env.REACT_APP_GITHUB_OAUTH_ADDRESS}`}
            >
              <GithubImage bgImage={GITHUB} />
              <ButtonText>Github로 계속하기</ButtonText>
            </SignupWithGithubButton>
          </InformationContainer>
        </SignupContainer>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
