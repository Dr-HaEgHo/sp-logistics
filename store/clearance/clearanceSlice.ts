import { createSlice } from "@reduxjs/toolkit";
import { addAirMovement, createNewClearance } from "./clearanceAction";

interface clearanceState {
  loading: boolean;
  createSuccess: boolean;
  airMovementSuccess: boolean;
}

const initialState: clearanceState = {
  loading: false,
  createSuccess: false,
  airMovementSuccess: false,
};

const clearanceSlice = createSlice({
  name: "clearance",
  initialState,
  reducers: {
    clearCreateSuccess: (state) => {
      state.createSuccess = false;
    },
    clearAirMovementSuccess: (state) => {
      state.airMovementSuccess = false;
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

    // ============================================================================== CREATE NEW
    builder.addCase(addAirMovement.pending, (state, { payload }) => {
      state.loading = true;
    }),
      builder.addCase(addAirMovement.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.airMovementSuccess = true;
      }),
      builder.addCase(addAirMovement.rejected, (state, { payload }) => {
        state.loading = false;
      });
  },
});



export const { 
    clearCreateSuccess, 
    clearAirMovementSuccess
 } =  clearanceSlice.actions;

export default clearanceSlice.reducer;
