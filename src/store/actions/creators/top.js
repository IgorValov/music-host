import { ADD_TOP } from "../types/top";

export const addTracks = (tracks) => ({
  type: ADD_TOP,
  payload: {
    tracks,
  },
});
