import { baseUrl } from "@/config";
import { DeliveryProps, UserDetails, loginType, signUpType } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import cogoToast from "cogo-toast";

interface createNew {
  customer: string;
  billOfLading:string;
  customerRefNumber:string;
  businessUnit:string;
  port:string;
  movemenType:string;
  deli:DeliveryProps | null;
  pickUp: 0 | 1;
}

// ================================================================= CREATE NEW CLEARANCE
export const createNewClearance = createAsyncThunk(
  "createNewClearance",
  async (values: createNew, { rejectWithValue, getState }) => {
    const { auth } = getState() as RootState;
    try {
      // const token = getState().auth.token
      const res = await axios.post(
        `${baseUrl}/custom-clearance/create-file`,
        {
          customer_id: values.customer,
          bill_loading_prefix: values.billOfLading.split('+')[0],
          bill_loading_number: values.billOfLading.split('+')[1],
          customer_reference_number: values.customerRefNumber,
          business_unit: values.businessUnit,
          port: values.port,
          movement_type: values.movemenType,
          delivery: JSON.stringify(values.deli),
          pickup_by_customer: values.pickUp,
        },
        {
          headers: {
            "Content-Type": "application/json",
            AUTHORIZATION: `Bearer ${auth.userToken}`,
          },
        }
      );
      if (res.status === 200 || res.status === 201) {
        cogoToast.success('Success: New file creater successfully')
        console.log("onboarding data", res);
        return res;
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        cogoToast.error("Something went Wrong");
        return rejectWithValue(err.response);
      } else {
        cogoToast.error("Something went Wrong too");
        return rejectWithValue(err.response);
      }
      // return rejectWithValue(err);
    }
  }
);

// ================================================================= Fetch Onboarding
export const getOnboardingVideos = createAsyncThunk(
  "getOnboardingVideos",
  async (id: string, { rejectWithValue, getState }) => {
    const { auth } = getState() as RootState;
    try {
      // const token = getState().auth.token
      const res = await axios(`${baseUrl}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.userToken}`,
        },
      });
      if (res.status === 200 || res.status === 201) {
        // cogoToast.success('Welcome to the onboarding, please take your onboarding before you can proceed')
        console.log("onboarding data", res);
        return res;
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        cogoToast.error("Something went Wrong");
        return rejectWithValue(err.response);
      } else {
        cogoToast.error("Something went Wrong too");
        return rejectWithValue(err.response);
      }
      // return rejectWithValue(err);
    }
  }
);
