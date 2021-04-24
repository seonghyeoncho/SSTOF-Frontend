import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { SignupInputProps } from "../../components/signup/interface";
import { UserSignupData } from "./interface";
import sha256 from "crypto";

const SignupContainer: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
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
    if (newPassword.value === confirmPassword.value) {
      newPassword.is_complete = true;
    }
    setPassword({ ...newPassword });
  };

  const onConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = { ...confirmPassword };
    const value = e.currentTarget.value;
    newConfirmPassword.value = value;
    if (password.value === newConfirmPassword.value) {
      newConfirmPassword.is_complete = true;
    }
    setconfirmPassword({ ...newConfirmPassword });
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

  const [confirmPassword, setconfirmPassword] = useState<SignupInputProps>({
    value: "",
    onChange: onConfirmPasswordChange,
    is_complete: false,
  });

  const [name, setName] = useState<SignupInputProps>({
    value: "",
    onChange: onNameChange,
    is_complete: false,
  });
};

export default SignupContainer;
