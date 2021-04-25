import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { SignupInputProps } from "../../components/signup/interface";
import { UserSignupData } from "./interface";
import sha256 from "crypto";
import Signup from "../../components/signup/index";
import { message } from "antd";

const SignupContainer: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const signUpSagaDispatch = (data: UserSignupData) => {
    const { password } = data;
    const newPassword = sha256
      .createHash("sha256")
      .update(password)
      .digest("hex");
    data.password = newPassword;
    dispatch({ type: "signup/signupSaga", payload: { data } });
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = { ...email };
    const value = e.currentTarget.value;
    newEmail.value = value;
    const regEx = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9]+/;
    if (regEx.test(value)) {
      newEmail.is_complete = true;
    }
    setEmail({ ...newEmail });
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = { ...password };
    const value = e.currentTarget.value;
    newPassword.value = value;
    if (newPassword.value !== " " && newPassword.value.length >= 4) {
      newPassword.is_complete = true;
    }
    setPassword({ ...newPassword });
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = { ...name };
    const value = e.currentTarget.value;
    newName.value = value;
    if (newName.value !== " " && newName.value.length >= 2) {
      newName.is_complete = true;
    }
    setName({ ...newName });
  };

  const [email, setEmail] = useState<SignupInputProps>({
    value: "",
    onChange: onEmailChange,
    is_complete: false,
  });

  const [password, setPassword] = useState<SignupInputProps>({
    value: "",
    onChange: onPasswordChange,
    is_complete: false,
  });

  const [name, setName] = useState<SignupInputProps>({
    value: "",
    onChange: onNameChange,
    is_complete: false,
  });

  const checkAllInputs = (): boolean =>
    email.is_complete && password.is_complete && name.is_complete;

  const signup = () => {
    if (!email.is_complete) {
      message.destroy();
      message.info("올바른 이메일 형식이 아닙니다.");
      emailRef.current?.select();
      return;
    }
    if (!password.is_complete) {
      message.destroy();
      message.info("비밀번호는 최소 4자 이상이어야 합니다.");
      passwordRef.current?.select();
      return;
    }
    if (!name.is_complete) {
      message.destroy();
      message.info("이름(닉네임)은 최소 2자 이상이어야 합니다.");
      nameRef.current?.select();
      return;
    }
    signUpSagaDispatch({
      email: email.value,
      password: password.value,
      name: name.value,
    });
  };

  return (
    <Signup
      email={email}
      emailRef={emailRef}
      password={password}
      passwordRef={passwordRef}
      name={name}
      nameRef={nameRef}
      signUp={signup}
      checkAllInputs={checkAllInputs}
    />
  );
};

export default SignupContainer;
