import { configureStore } from "@reduxjs/toolkit";
import errorAndSuccessReducer from "./errorAndSuccessSlice";

export default configureStore({
  reducer: {
    errorAndSuccess: errorAndSuccessReducer,
  },
});
