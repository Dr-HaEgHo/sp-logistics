import { baseUrl } from "@/config";
import { DeliveryProps, UserDetails, loginType, signUpType } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import cogoToast from "cogo-toast";

interface createNew {
  customer: string;
  billOfLading: string;
  customerRefNumber: string;
  businessUnit: string;
  port: string;
  movementType: string;
  deli: DeliveryProps | null;
  pickUp: 0 | 1;
}

interface addMovement {
    consignee: DeliveryProps | null;
    shipper: DeliveryProps | null;
    specialHandling: string;
    noOfParcels: number | undefined;
    grossWeight: number | undefined;
    chargeableWeight: number | undefined;
    description: string;
    portOfLoading: string;
    arrivalPort: string;
    arrivalCarrier: string;
    arrivalFlightCode: string;
    arrivalFlightNumber: string;
    arrivalDate: string;
    fasahNumber: string;
    bayanNumber: string;
    bayanDate: string;
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
          bill_loading_prefix: values.billOfLading.split("+")[0],
          bill_loading_number: values.billOfLading.split("+")[1],
          customer_reference_number: values.customerRefNumber,
          business_unit: values.businessUnit,
          port: values.port,
          movement_type: values.movementType,
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
        cogoToast.success("Success: New file creater successfully");
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

// ================================================================= CREATE NEW CLEARANCE
export const addAirMovement = createAsyncThunk(
  "addAirMovement",
  async (values: addMovement, { rejectWithValue, getState }) => {
    const { auth } = getState() as RootState;
    try {
      // const token = getState().auth.token
      const res = await axios.post(
        `${baseUrl}/custom-clearance/files/:fileid/add-movement-type`,
        {
          consignee: JSON.stringify(values.consignee),
          shipper: JSON.stringify(values.shipper),
          special_handling: values.specialHandling,
          number_of_parcel: values.noOfParcels,
          gross_weight: values.grossWeight,
          chargeable_weight: values.chargeableWeight,
          description: values.description,
          port_of_loading: values.portOfLoading,
          arrival_port: values.arrivalPort,
          arrival_carrier: values.arrivalCarrier,
          arrival_flight_code: values.arrivalFlightNumber.split("+")[0],
          arrival_flight_number: values.arrivalFlightNumber.split("+")[1],
          arrival_date: values.arrivalDate,
          fasah_draft_number: values.fasahNumber,
          fasah_bayan_number: values.bayanNumber,
          fasah_bayan_date: values.bayanDate,
        },
        {
          headers: {
            "Content-Type": "application/json",
            AUTHORIZATION: `Bearer ${auth.userToken}`,
          },
        }
      );
      if (res.status === 200 || res.status === 201) {
        cogoToast.success("Success: New file creater successfully");
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
