import axios from "axios";
import { IUserCreateRequest } from "./components/user/interfaces/user-create-request.interface";

const api = axios.create({
  baseURL: "http://52.79.87.105:8080/v1/",
});

export const userApi = {
  signUp: (body: IUserCreateRequest) => api.post("user", body),
};
