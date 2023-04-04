import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../books/BookSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
