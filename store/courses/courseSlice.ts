import { createSlice } from "@reduxjs/toolkit";
import { courseData, onboardingCourses, onboardingData } from "@/types";
import { getAllCourses, getCourseDetails, getLatestCourses, getOnboardingId, getOnboardingVideos, getOngoingCourses, updateOnboardingData } from "./courseAction";


interface coursesState {
  loading: boolean;
  courseDetailLoading: boolean;
  updateLoading: boolean;
  latestLoading: boolean;
  ongoingLoading: boolean;
  onboardingData: onboardingData | null;
  onboardingCourses: onboardingCourses | null;
  courses: onboardingCourses[];
  courseDetails: onboardingCourses | null;
  latestCourses: onboardingCourses[];
  ongoingCourses: onboardingCourses[];
}

const initialState: coursesState = {
  loading: false,
  courseDetailLoading: false,
  updateLoading: false,
  latestLoading: false,
  ongoingLoading: false,
  courses: [],
  courseDetails: null,
  onboardingData: null,
  onboardingCourses: null,
  latestCourses: [],
  ongoingCourses: [],
};

export const authSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    //============================================================== TO FETCH ALL ONBOARDING COURSES
    builder.addCase(getOnboardingId.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(getOnboardingId.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.onboardingData = payload as unknown as onboardingData || undefined
    }),
    builder.addCase(getOnboardingId.rejected, (state) => {
      state.loading = false;
    });

    //============================================================== TO FETCH ALL ONBOARDING COURSES
    builder.addCase(getOnboardingVideos.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(getOnboardingVideos.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.onboardingCourses = payload?.data as unknown as onboardingCourses || undefined
    }),
    builder.addCase(getOnboardingVideos.rejected, (state) => {
      state.loading = false;
    });


    //============================================================== TO UPDATE ALL ONBOARDING COURSES
    builder.addCase(updateOnboardingData.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(updateOnboardingData.fulfilled, (state, { payload }) => {
      state.loading = false;
    }),
    builder.addCase(updateOnboardingData.rejected, (state) => {
      state.loading = false;
    });
    
    //============================================================== TO FETCH ALL COURSES
    builder.addCase(getAllCourses.pending, (state, { payload }) => {
      state.loading = true;
    }),
    builder.addCase(getAllCourses.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.courses = payload?.data?.results as unknown as onboardingCourses[] || undefined
    }),
    builder.addCase(getAllCourses.rejected, (state, { payload }) => {
      state.loading = false;
    });


    //============================================================== TO FETCH LATEST COURSES
    builder.addCase(getLatestCourses.pending, (state, { payload }) => {
      state.latestLoading = true;
    }),
    builder.addCase(getLatestCourses.fulfilled, (state, { payload }) => {
      state.latestLoading = false;
      state.latestCourses = payload?.data as unknown as onboardingCourses[] || undefined
    }),
    builder.addCase(getLatestCourses.rejected, (state, { payload }) => {
      state.latestLoading = false;
    });

    //============================================================== TO FETCH LATEST COURSES
    builder.addCase(getOngoingCourses.pending, (state, { payload }) => {
      state.ongoingLoading = true;
    }),
    builder.addCase(getOngoingCourses.fulfilled, (state, { payload }) => {
      state.ongoingLoading = false;
      state.ongoingCourses = payload?.data?.results as unknown as onboardingCourses[] || undefined
    }),
    builder.addCase(getOngoingCourses.rejected, (state, { payload }) => {
      state.ongoingLoading = false;
    });


    //============================================================== TO FETCH LATEST COURSES
    builder.addCase(getCourseDetails.pending, (state, { payload }) => {
      state.courseDetailLoading = true;
    }),
    builder.addCase(getCourseDetails.fulfilled, (state, { payload }) => {
      state.courseDetailLoading = false;
      state.courseDetails = payload?.data as unknown as onboardingCourses || undefined
    }),
    builder.addCase(getCourseDetails.rejected, (state, { payload }) => {
      state.courseDetailLoading = false;
    });
  },
});

export const { } = authSlice.actions;

// export const selectAuth = (state: RootState) => state.counter.value

export default authSlice.reducer; 