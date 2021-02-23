import React, { createRef, useState } from "react";
import { message } from "antd";
import sha256 from "crypto";
import { userApi } from "../../api";
import {
  Container,
  InformationContainer,
  MainText,
  SignupContainer,
  SubText,
  Wrapper,
  Input,
  InputTitle,
} from "./styles";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const emailRef: React.RefObject<HTMLInputElement> = createRef();
  const passwordRef: React.RefObject<HTMLInputElement> = createRef();
  const confirmPasswordRef: React.RefObject<HTMLInputElement> = createRef();
  const nameRef: React.RefObject<HTMLInputElement> = createRef();
  const buttonRef: React.RefObject<HTMLInputElement> = createRef();

  const clearAllInputs = () => {
    if (emailRef.current) {
      emailRef.current.value = "";
      setEmail("");
    }
    if (passwordRef.current) {
      passwordRef.current.value = "";
      setPassword("");
    }
    if (confirmPasswordRef.current) {
      confirmPasswordRef.current.value = "";
      setConfirmPassword("");
    }
    if (nameRef.current) {
      nameRef.current.value = "";
      setName("");
    }
  };

  const handleSignup = (event: React.FormEvent) => {
    event.preventDefault();
    if (email === "") {
      message.warning("이메일을 입력해 주세요.");
      return;
    }
    if (name === "") {
      message.warning("이름(닉네임)을 입력해 주세요.");
      return;
    }
    if (password === "") {
      message.warning("비밀번호를 입력해 주세요.");
    }
    const requestBody = {
      email: email,
      password: sha256.createHash("sha256").update(password).digest("hex"),
      name: name,
    };
    message.loading("잠시만 기다려 주세요..");
    userApi
      .signUp(requestBody)
      .then(() => {
        alert("회원가입이 완료되었습니다.");
        // TODO : Move to Login page.
      })
      .catch(({ response: { status } }) => {
        if (status === 400) {
          message.destroy();
          message.warning("[400] 요청 형식이 잘못 되었습니다.");
          clearAllInputs();
        } else if (status === 409) {
          message.destroy();
          message.warning("해당 이메일은 이미 사용 중입니다.");
          clearAllInputs();
        } else {
          message.warning("알 수 없는 오류가 발생했습니다.");
          console.log(status);
          clearAllInputs();
        }
      });
  };
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
              onChange={(event: React.SyntheticEvent<HTMLInputElement>) => {
                setEmail(event.currentTarget.value);
              }}
            />
            <InputTitle>비밀 번호</InputTitle>
            <Input
              type="password"
              id="password"
              ref={passwordRef}
              onChange={(event: React.SyntheticEvent<HTMLInputElement>) => {
                setPassword(event.currentTarget.value);
              }}
            />
            <InputTitle>비밀 번호 확인</InputTitle>
            <Input
              type="password"
              id="confirmPassword"
              ref={confirmPasswordRef}
              onChange={(event: React.SyntheticEvent<HTMLInputElement>) => {
                setConfirmPassword(event.currentTarget.value);
              }}
            />
            <InputTitle>이름(닉네임)</InputTitle>
            <Input
              type="name"
              id="name"
              ref={nameRef}
              onChange={(event: React.SyntheticEvent<HTMLInputElement>) => {
                setName(event.currentTarget.value);
              }}
            />
          </InformationContainer>
        </SignupContainer>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
