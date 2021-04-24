import axios, { AxiosResponse } from 'axios';
import { UserSignupData } from './containers/signup/interface';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ADDRESS,
});

export const userApi = {
  signup: async (data: UserSignupData): Promise<AxiosResponse> => {
    const response = await api.post('user', data);
    return response;
  },
};
