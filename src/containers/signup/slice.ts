import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignupState, UserSignupData } from "./interface";

const initialState: SignupState = {
  user: {
    email: "",
    password: "",
    name: "",
  },
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signup(state, action: PayloadAction<UserSignupData>) {
      state.user = action.payload;
    },
  },
});

export const { signup } = signupSlice.actions;
export default signupSlice.reducer;
