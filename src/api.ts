import axios from "axios";

const api = axios.create({
  baseURL: "http://52.79.87.105:8080/v1/",
});

export const userApi = {};
