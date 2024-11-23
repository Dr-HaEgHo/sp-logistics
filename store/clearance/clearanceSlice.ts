import { createSlice } from "@reduxjs/toolkit";
import { addAirMovement, addOceanMovement, createNewClearance } from "./clearanceAction";

interface clearanceState {
  loading: boolean;
  createSuccess: boolean;
  airMovementSuccess: boolean;
  oceanMovementSuccess: boolean;
  fileId: string;
}

const initialState: clearanceState = {
  loading: false,
  createSuccess: false,
  airMovementSuccess: false,
  oceanMovementSuccess: false,
  fileId: ""
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
    clearOceanMovementSuccess: (state) => {
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
        state.fileId = payload?.data.data.id;
      }),
      builder.addCase(createNewClearance.rejected, (state, { payload }) => {
        state.loading = false;
      });

    // ============================================================================== ADD AIR MOVEMENT
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


    // ============================================================================== ADD OCEAN MOVEMENT
    builder.addCase(addOceanMovement.pending, (state, { payload }) => {
      state.loading = true;
    }),
      builder.addCase(addOceanMovement.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.oceanMovementSuccess = true;
      }),
      builder.addCase(addOceanMovement.rejected, (state, { payload }) => {
        state.loading = false;
      });
  },
});



export const { 
    clearCreateSuccess, 
    clearAirMovementSuccess,
    clearOceanMovementSuccess
 } =  clearanceSlice.actions;

export default clearanceSlice.reducer;
