export interface SignupProps {
  email: SignupInputProps;
  emailRef?: React.RefObject<HTMLInputElement>;
  password: SignupInputProps;
  passwordRef?: React.RefObject<HTMLInputElement>;
  name: SignupInputProps;
  nameRef?: React.RefObject<HTMLInputElement>;
  signUp: () => void;
  checkAllInputs: () => boolean;
}

export interface SignupInputProps {
  value: string;
  is_complete: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
