import axios, { AxiosResponse } from "axios";
import { UserLoginData, UserLoginResponse } from "./containers/login/interface";
import {
  UserSignupData,
  UserSignupResponse,
} from "./containers/signup/interface";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ADDRESS,
});

export const userApi = {
  signup: async (
    data: UserSignupData,
  ): Promise<AxiosResponse<UserSignupResponse>> => {
    const result = await api.post("user", data);
    return result;
  },
  login: async (
    data: UserLoginData,
  ): Promise<AxiosResponse<UserLoginResponse>> => {
    const result = await api.post("user/sign-in", data);
    return result;
  },
};
