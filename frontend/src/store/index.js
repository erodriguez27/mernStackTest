import { configureStore } from "@reduxjs/toolkit";
import filesReducer from "./slices/files.slice";

const store = configureStore({
  reducer: {
    filesReducer,
  },
});

export default store;
