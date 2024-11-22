import { createSlice } from "@reduxjs/toolkit";
import { createNewClearance } from "./clearanceAction";

interface clearanceState {
    loading: boolean;
    createSuccess: boolean;
}

const initialState: clearanceState = {
    loading: false,
    createSuccess: false,
};

const clearanceSlice = createSlice({
  name: "clearance",
  initialState,
  reducers: {
    clearCreateSuccess: (state) => {
        state.createSuccess = false;
      },
  },
  extraReducers: (builder) => {
    // ============================================================================== CREATE NEW
    builder.addCase(createNewClearance.pending, (state, { payload }) => {
      state.loading = true;
    }),
      builder.addCase(createNewClearance.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.createSuccess = true;
      }),
      builder.addCase(createNewClearance.rejected, (state, { payload }) => {
        state.loading = false;
      });
  },
});

export const { clearCreateSuccess } = clearanceSlice.actions
export default clearanceSlice.reducer