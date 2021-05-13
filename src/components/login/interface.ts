export interface LoginProps {
  email: LoginInputProps;
  emailRef?: React.RefObject<HTMLInputElement>;
  password: LoginInputProps;
  passwordRef?: React.RefObject<HTMLInputElement>;
  login: () => void;
  checkAllInputs: () => boolean;
}

export interface LoginInputProps {
  value: string;
  is_complete: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
