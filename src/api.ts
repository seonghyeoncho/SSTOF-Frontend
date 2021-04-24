import axios from 'axios';
import {
  UserSignupData,
  UserSignupResponse,
} from './containers/signup/interface';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ADDRESS,
});

export const userApi = {
  signup: async (data: UserSignupData): Promise<UserSignupResponse> => {
    const result = await api.post('user', data);
    const response: UserSignupResponse = {
      userId: result.data.userId,
      name: result.data.name,
      email: result.data.email,
      createdAt: result.data.createdAt,
      role: result.data.role,
    };
    return response;
  },
};
