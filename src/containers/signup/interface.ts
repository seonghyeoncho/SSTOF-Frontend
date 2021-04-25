export interface UserSignupData {
  email: string;
  password: string;
  name: string;
}

export interface SignupState {
  user: UserSignupData;
}

export interface UserSignupResponse {
  userId: number;
  name: string;
  email: string;
  createdAt: string;
  role: string;
}
