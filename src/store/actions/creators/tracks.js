import { ADD_TRACKS } from "../types/tracks";

export const addTracks = (tracks) => ({
  type: ADD_TRACKS,
  payload: {
    tracks,
  },
});
