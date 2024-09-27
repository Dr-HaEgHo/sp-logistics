import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { getChatDetails, getChatRooms } from "./ChatActions";
import { chatRoomsData } from "@/types";
import { chatDetailsData } from "@/types";





interface AuthState {
  loading: boolean;
  chatLoading: boolean;
  chatRooms: chatRoomsData | null;
  chatDetails: chatDetailsData | null;
}

const initialState: AuthState = {
  loading: false,
  chatLoading : false ,
  chatRooms: null,
  chatDetails: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetChatDetails: (state) => {
      state.chatDetails = null
    }
  },
  extraReducers: (builder) => {

    // ==================================================== GET ALL CHAT ROOMS
    builder.addCase(getChatRooms.pending, (state, { payload }) => {
      state.loading = true;
    }),
    builder.addCase(getChatRooms.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.chatRooms = payload?.data;
    }),
    builder.addCase(getChatRooms.rejected, (state, { payload }) => {
      state.loading = false;
    });


    // ==================================================== GET ALL CHAT ROOMS
    builder.addCase(getChatDetails.pending, (state, { payload }) => {
      state.chatLoading = true;
    }),
    builder.addCase(getChatDetails.fulfilled, (state, { payload }) => {
      state.chatLoading = false;
      state.chatDetails = payload?.data;
    }),
    builder.addCase(getChatDetails.rejected, (state, { payload }) => {
      state.chatLoading = false;
    });
   
   
  
  },
});

export const { resetChatDetails } = authSlice.actions;

// export const selectAuth = (state: RootState) => state.counter.value

export default authSlice.reducer;
