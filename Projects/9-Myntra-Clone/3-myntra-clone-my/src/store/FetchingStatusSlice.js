import { createSlice } from "@reduxjs/toolkit";

const FetchingSlice = createSlice({
  name: "items",
  initialState: {
    fetchingDone: false,
    currentFetching: false,
  },
  reducers: {
    markFetchingDone: (state)=> {
      state.fetchingDone = true;
    },
    markFetchingStarted: (state)=> {
       state.currentFetching = true;
    },
    markFetchingFinished: (state)=> {
       state.currentFetching = false;
    }
  }
})

export const FetchingActions = FetchingSlice.actions;
export default FetchingSlice;