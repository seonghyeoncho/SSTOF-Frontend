export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  userId: number;
  name: string;
  email: string;
  createdAt: string;
  role: string;
  accessToken: string;
  refreshToken: string;
}

export interface LoginState {
  user: UserLoginData;
}
