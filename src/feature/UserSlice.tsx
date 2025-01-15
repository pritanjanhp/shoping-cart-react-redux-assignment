import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { validateCredentials } from "./userCredentials";

type User = {
  name: string;
  email: string;
  pwd: string;
};

const initialState: User = {
  name: "",
  email: "",
  pwd: ""
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      const { email, pwd } = action.payload;
      const isValid = validateCredentials(email, pwd);
      if (isValid) {
        // console.log("valid user");
        state.email = email;
        state.pwd = pwd;
        state.name = email.split("@")[0];
      } else {
        state.name = "";
        state.email = "";
        state.pwd = "";
        alert("invalid user data");
      }
    },
    logout: (state) => {
      state.name = "";
      state.email = "";
      state.pwd = "";
    }
  }
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: { user: User }) => state.user;
export default userSlice.reducer;
