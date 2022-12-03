import { ADD_TOP } from "../actions/types/top";

const initialState = [];

export default function tracksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TOP: {
      const { tracks } = action.payload;

      return tracks;
    }

    default:
      return state;
  }
}
