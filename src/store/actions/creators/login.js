import {
  GET_TOKEN_FAILURE,
  GET_TOKEN_STARTED,
  GET_TOKEN_SUCCESS,
} from "../types/login";

export const fetchCreateTokenStarted = () => ({
  type: GET_TOKEN_STARTED,
});

export const fetchCreateTokenSuccess = (accessToken) => ({
  type: GET_TOKEN_SUCCESS,
  payload: {
    accessToken,
  },
});

export const fetchCreateTokenFailure = (error) => ({
  type: GET_TOKEN_FAILURE,
  payload: {
    error,
  },
});
