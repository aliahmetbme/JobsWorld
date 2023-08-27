import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";

const store = configureStore({
  reducer: {
    GeneralResponse: Reducer,
  },
});

export default store;