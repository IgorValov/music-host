import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./reducers/tracks";
import loginReducer from "./reducers/login";
import topReducer from "./reducers/top";
import thunk from "redux-thunk";

export const BASE_URL = "https://painassasin.online";

export const store = configureStore({
  reducer: {
    top: topReducer,
    tracks: tracksReducer,
    login: loginReducer,
  },
  middleware: [thunk],
});
