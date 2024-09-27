import { baseUrl, baseUrlApi } from "@/config";
import { courseData, loginType } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cogoToast from "cogo-toast";
import { RootState } from "../store";

// const baseUrl = process.env.BASE_URL
type updateDataType = {
  readyData : {
    onboarding: courseData[]
  }
}

// ================================================================= Fetch Onboarding
export const getOnboardingId = createAsyncThunk(
  "getOnboardingId",
  async ( arg, { rejectWithValue, getState, dispatch }
  ) => {
    const { auth, courses } = getState() as RootState 
    try {
      // const token = getState().auth.token
      const res = await axios(`${baseUrlApi}/api/onboarding-course/`,{
        headers:{
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.userToken}`
        }
      });
      if (res.status === 200 || res.status === 201) {
        // cogoToast.success('Welcome to the onboarding, please take your onboarding before you can proceed')
        console.log('onboarding data', res)
        dispatch(getOnboardingVideos(res.data?.id))
        
        return res;
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        cogoToast.error('Something went Wrong')
        return rejectWithValue(err.response);
        } else {
        cogoToast.error('Something went Wrong too')
        return rejectWithValue(err.response);
      }
      // return rejectWithValue(err);
    }
  }
);

// ================================================================= Fetch Onboarding
export const getOnboardingVideos = createAsyncThunk(
  "getOnboardingVideos",
  async ( id:string, { rejectWithValue, getState }
  ) => {
    const { auth } = getState() as RootState 
    try {
      // const token = getState().auth.token
      const res = await axios(`${baseUrlApi}/api/course/${id}/`,{
        headers:{
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.userToken}`
        }
      });
      if (res.status === 200 || res.status === 201) {
        // cogoToast.success('Welcome to the onboarding, please take your onboarding before you can proceed')
        console.log('onboarding data', res)
        return res;
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        cogoToast.error('Something went Wrong')
        return rejectWithValue(err.response);
        } else {
        cogoToast.error('Something went Wrong too')
        return rejectWithValue(err.response);
      }
      // return rejectWithValue(err);
    }
  }
);

// ================================================================= Update Onboarding
export const updateOnboardingData = createAsyncThunk(
  "updateOnboardingData",
  async ( { readyData }: updateDataType, { rejectWithValue, getState, dispatch }
  ) => {
    try {
      // const token = getState().auth.token
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(readyData)
      }
      const res = await fetch('http://localhost:5050/0', options);
      if (res.status === 200 || res.status === 201) {
        // dispatch(getOnboardingVideos())
        return res.json();
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        cogoToast.error('Something went Wrong')
        return rejectWithValue(err.response);
        } else {
        cogoToast.error('Something went Wrong too')
        return rejectWithValue(err.response);
      }
      // return rejectWithValue(err);
    }
  }
);

// ================================================================= Fetch All Courses
export const getAllCourses = createAsyncThunk(
  "getAllCourses",
  async ( arg, { rejectWithValue, getState, dispatch }
  ) => {
    const  { auth } = getState() as RootState
    try {
      const res = await axios.get(`${baseUrlApi}/api/courses/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth?.userToken}`
        },
      });
      if (res.status === 200 || res.status === 201) {
        // cogoToast.success('Sign up successful')
        return res;
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        cogoToast.error('Something went Wrong')
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue(err.response);
      }
      // return rejectWithValue(err);
    }
  }
);

// ================================================================= Fetch latest Courses
export const getLatestCourses = createAsyncThunk(
  "getLatestCourses",
  async ( arg, { rejectWithValue, getState, dispatch }
  ) => {
    const  { auth } = getState() as RootState
    try {
      const res = await axios.get(`${baseUrlApi}/api/latest-courses/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth?.userToken}`
        },
      });
      if (res.status === 200 || res.status === 201) {
        // cogoToast.success('Sign up successful')
        return res;
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        cogoToast.error('Something went Wrong')
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue(err.response);
      }
      // return rejectWithValue(err);
    }
  }
);

// ================================================================= Fetch ongoing Courses
export const getOngoingCourses = createAsyncThunk(
  "getOngoingCourses",
  async ( arg, { rejectWithValue, getState, dispatch }
  ) => {
    const  { auth } = getState() as RootState
    try {
      const res = await axios.get(`${baseUrlApi}/api/all-enrolled-courses/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth?.userToken}`
        },
      });
      if (res.status === 200 || res.status === 201) {
        // cogoToast.success('Sign up successful')
        return res;
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        cogoToast.error('Something went Wrong')
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue(err.response);
      }
      // return rejectWithValue(err);
    }
  }
);

// ================================================================= Fetch COURSE DETAILS
export const getCourseDetails = createAsyncThunk(
  "getCourseDetails",
  async ( id:string, { rejectWithValue, getState }
  ) => {
    const { auth } = getState() as RootState 
    try {
      // const token = getState().auth.token
      const res = await axios(`${baseUrlApi}/api/course/${id}/`,{
        headers:{
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.userToken}`
        }
      });
      if (res.status === 200 || res.status === 201) {
        // cogoToast.success('Welcome to the onboarding, please take your onboarding before you can proceed')
        console.log('onboarding data', res)
        return res;
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        cogoToast.error('Something went Wrong')
        return rejectWithValue(err.response);
        } else {
        cogoToast.error('Something went Wrong too')
        return rejectWithValue(err.response);
      }
      // return rejectWithValue(err);
    }
  }
);



// ================================================================= LOG IN
export const login = createAsyncThunk(
  "login",
  async ( values: loginType, { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const res = await axios.post(
        `${baseUrl}/login/`,
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200 || res.status === 201) {
        cogoToast.success('Sign up successful')
        return res;
      }
    } catch (err: any) {
      
      if (err.response.status === 400) {
        cogoToast.success('Something went Wrong')
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue(err.response);
      }

      // return rejectWithValue(err);
    }
  }
);
