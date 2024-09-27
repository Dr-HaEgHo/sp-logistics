import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";
import { baseUrlApi } from "@/config";
import cogoToast from "cogo-toast";

// ================================================================= GET PROFILE DATA
export const getChatRooms = createAsyncThunk(
    "getChatRooms",
    async ( arg, { rejectWithValue, getState, dispatch }) => {
      const { auth } = getState() as RootState;
      try {
        const res = await axios.get(`${baseUrlApi}/api/chats/`, {
          headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.userToken}`
          }
        });
        if (res.status === 200 || res.status === 201) {
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

  // ================================================================= GET PROFILE DATA
export const getChatDetails = createAsyncThunk(
    "getChatDetails",
    async ( chatId: string, { rejectWithValue, getState, dispatch }) => {
      const { auth } = getState() as RootState;
      try {
        const res = await axios.get(`${baseUrlApi}/api/chat/${chatId}/`, {
          headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.userToken}`
          }
        });
        if (res.status === 200 || res.status === 201) {
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