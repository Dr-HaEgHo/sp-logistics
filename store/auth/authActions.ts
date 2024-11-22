import { baseUrl } from "@/config";
import { UserDetails, loginType, signUpType } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import cogoToast from "cogo-toast";

// const baseUrl = process.env.BASE_URL

interface updateDetails {
  values: {
    first_name: string;
    last_name: string;
    phone_number: string;
    photo: string;
  };
}

// ================================================================= SIGN UP
export const signup = createAsyncThunk(
  "signup",
  async ({values, phone}: {values: signUpType, phone: string}, { rejectWithValue, getState, dispatch }) => {
    try {
      const res = await axios.post(
        `${baseUrl}/auth/signup`,
        {
          firstname: values.firstname.toLowerCase(),
          lastname: values.lastname.toLowerCase(),
          email: values.email.toLowerCase(),
          username: "",
          phone: phone,
          password: values.password,
          confirm_password: values.password,
          referrer_code: null, //nullable
          platform: "web",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTimeout(() => {
        if (!res.status) {
          alert("time don reach boss.");
        }
      }, 1000);
      if (res.status === 200 || res.status === 201) {
        cogoToast.success("Successful");
        return res;
      }
    } catch (err: any) {
      console.log("the error of the signup", err);
      if (err.response.status === 400) {
        cogoToast.error(
          err.response.data.phone_number ||
            err.response.data.first_name ||
            err.response.data.email ||
            err.response.data.last_name ||
            err.response.data.username
        );
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue(err.response);
      }

      // return rejectWithValue(err);
    }
  }
);

// ================================================================= LOG IN
export const login = createAsyncThunk(
  "login",
  async (values: loginType, { rejectWithValue, getState, dispatch }) => {
    try {
      const res = await axios.post(
        `${baseUrl}/auth/login`,
        {
          loginid: values.email.toLowerCase(),
          password: values.password,
          platform: "web",
          device_token: "sdjdiud8udjdijd",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200 || res.status === 201) {
        cogoToast.success("Successful");
        console.log('login result: ', res.data.data.token)
        return res;
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        cogoToast.error("Something went Wrong");
        return rejectWithValue(err.response);
      } else if (err.response.status === 404) {
        cogoToast.error("Incorrect Credentials");
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue(err.response);
      }

      // return rejectWithValue(err);
    }
  }
);

// ================================================================= GET PROFILE DATA
export const getProfileData = createAsyncThunk(
  "getProfileData",
  async (arg, { rejectWithValue, getState, dispatch }) => {
    const { auth } = getState() as RootState;
    try {
      const res = await axios.get(`${baseUrl}/me/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.userToken}`,
        },
      });
      if (res.status === 200 || res.status === 201) {
        return res;
      }
    } catch (err: any) {
      if (
        err.response.status === 400 ||
        err.response.status === 401 ||
        err.response.status === 404
      ) {
        cogoToast.error("Something went Wrong");
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue(err.response);
      }
      // return rejectWithValue(err);
    }
  }
);
