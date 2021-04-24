import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignupState, UserSignupData } from "./interface";

const initialState: SignupState = {
  is_loading: false,
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
    setSignupLoading(state, action: PayloadAction<boolean>) {
      state.is_loading = action.payload;
    },
  },
});

export const { signup, setSignupLoading } = signupSlice.actions;
export default signupSlice.reducer;
