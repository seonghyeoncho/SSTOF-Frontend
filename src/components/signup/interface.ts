export interface SignupProps {
  email: SignupInputProps;
  password: SignupInputProps;
  confirmPassword: SignupInputProps;
  name: SignupInputProps;
  signUp: () => void;
}

export interface SignupInputProps {
  value: string;
  is_complete: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
