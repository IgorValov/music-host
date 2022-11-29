import { ADD_TRACKS } from "../actions/types/tracks";

const initialState = [];

export default function tracksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRACKS: {
      const { tracks } = action.payload;

      return tracks;
    }

    default:
      return state;
  }
}
