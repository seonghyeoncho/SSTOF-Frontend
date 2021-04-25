import { UserSignupData } from "../../containers/signup/interface";

export interface SignupProps {
  email: SignupInputProps;
  emailRef: React.RefObject<HTMLInputElement>;
  password: SignupInputProps;
  passwordRef: React.RefObject<HTMLInputElement>;
  confirmPassword: SignupInputProps;
  confirmPasswordRef: React.RefObject<HTMLInputElement>;
  name: SignupInputProps;
  nameRef: React.RefObject<HTMLInputElement>;
  signUp: () => void;
}

export interface SignupInputProps {
  value: string;
  is_complete: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
