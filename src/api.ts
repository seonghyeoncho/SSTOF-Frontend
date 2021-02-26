import axios from "axios";
import { IUserCreateRequest } from "./components/user/interfaces/user-create-request.interface";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ADDRESS,
});

export const userApi = {
  signUp: (body: IUserCreateRequest) => api.post("user", body),
  signUpWithGithub: () =>
    axios.post("http://localhost:8080/login/oauth2/code/github"),
};
