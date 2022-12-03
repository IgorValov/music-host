import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./reducers/tracks";
import loginReducer from "./reducers/login";
import thunk from "redux-thunk";

export const BASE_URL = "https://painassasin.online";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    login: loginReducer,
  },
  middleware: [thunk],
});
