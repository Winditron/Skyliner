import { createSlice } from "@reduxjs/toolkit";

const errorAndSuccessSlice = createSlice({
  name: "errorAndSuccess",
  initialState: {
    display: false,
    type: "",
    message: "",
  },
  reducers: {
    displayError: (state, action) => {
      state.display = true;
      state.type = "error";
      state.message = action.payload;
    },
    displaySuccess: (state, action) => {
      state.display = true;
      state.type = "success";
      state.message = action.payload;
    },
    hideErrorSuccess: (state) => {
      state.display = false;
      state.type = "";
      state.message = "";
    },
  },
});

export const { displayError, displaySuccess, hideErrorSuccess } =
  errorAndSuccessSlice.actions;

export default errorAndSuccessSlice.reducer;
