import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { getProfileData, login, signup, updateProfileData } from "./authActions";
import { UserDetails } from "@/types";

interface AuthState {
  loading: boolean;
  updateLoading: boolean;
  isLoggedIn: boolean;
  signupSuccess: boolean;
  loginSuccess: boolean;
  userDetails: UserDetails | null;
  userToken: string;
  requestToken: string;
  created_at: string
  email: string
  first_name: string
  id:string
  last_name: string;
  phone_number: string | null
  photo: string | null
  user_type: string
}

const initialState: AuthState = {
  loading: false,
  updateLoading: false,
  isLoggedIn: false,
  signupSuccess: false,
  loginSuccess: false,
  userDetails: null,
  userToken: "",
  requestToken: "",
  created_at: "",
  email: "",
  first_name: "",
  id:"",
  last_name: "",
  phone_number: "",
  photo: "",
  user_type: ""
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearSignupSuccess: (state) => {
      state.signupSuccess = false;
    },
    clearloginSuccess: (state) =>{
      state.loginSuccess = false
    },
    logout: (state) => {
      state.userToken = "";
      state.isLoggedIn = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state, { payload }) => {
      state.loading = true;
    }),
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.signupSuccess = true;
      state.userDetails = payload?.data.user;
    }),
    builder.addCase(signup.rejected, (state, { payload }) => {
      state.loading = false;
    });

    // ==================================================== LOGIN
    builder.addCase(login.pending, (state, { payload }) => {
      state.loading = true;
    }),
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.loginSuccess = true;
      state.isLoggedIn = true
      state.userDetails = payload?.data.user;
      state.userToken = payload?.data.token;
    }),
    builder.addCase(login.rejected, (state, { payload }) => {
      state.loading = false;
    });
   
   
    // ==================================================== GET PROFILE DATA
    builder.addCase(getProfileData.pending, (state, { payload }) => {
      state.loading = true;
    }),
    builder.addCase(getProfileData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userDetails = payload?.data;
    }),
    builder.addCase(getProfileData.rejected, (state, { payload }) => {
      state.loading = false;
    });

    // ==================================================== UPDATE PROFILE DATA
    builder.addCase(updateProfileData.pending, (state, { payload }) => {
      state.loading = true;
    }),
    builder.addCase(updateProfileData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userDetails = payload?.data;
    }),
    builder.addCase(updateProfileData.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export const { clearSignupSuccess, clearloginSuccess, logout } = authSlice.actions;

// export const selectAuth = (state: RootState) => state.counter.value

export default authSlice.reducer;
