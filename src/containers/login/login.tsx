import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { UserLoginData } from "./interface";
import { LoginInputProps } from "../../components/login/interface";
import sha256 from "crypto";
import { message } from "antd";
import Login from "../../components/login";

const LoginContainer: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const loginSagaDispatch = (data: UserLoginData) => {
    const { password } = data;
    const hashedPassword = sha256
      .createHash("sha256")
      .update(password)
      .digest("hex");
    data.password = hashedPassword;
    dispatch({ type: "login/loginSaga", payload: { data } });
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

  const [email, setEmail] = useState<LoginInputProps>({
    value: "",
    onChange: onEmailChange,
    is_complete: false,
  });

  const [password, setPassword] = useState<LoginInputProps>({
    value: "",
    onChange: onPasswordChange,
    is_complete: false,
  });

  const checkAllInputs = (): boolean =>
    email.is_complete && password.is_complete;

  const login = () => {
    if (!email.is_complete) {
      message.destroy();
      message.info("올바른 이메일 형식이 아닙니다.");
      emailRef.current?.select();
      return;
    }
    if (!password.is_complete) {
      message.destroy();
      message.info("비밀번호는 최소 4자 이상입니다.");
      passwordRef.current?.select();
      return;
    }
    loginSagaDispatch({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <Login
      email={email}
      emailRef={emailRef}
      password={password}
      passwordRef={passwordRef}
      login={login}
      checkAllInputs={checkAllInputs}
    />
  );
};

export default LoginContainer;
