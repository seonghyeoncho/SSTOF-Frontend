import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginState, UserLoginData } from "./interface";

const initialState: LoginState = {
  user: {
    email: "",
    password: "",
  },
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserLoginData>) {
      state.user = action.payload;
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
