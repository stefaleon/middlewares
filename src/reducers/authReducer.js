import { TOGGLE_AUTH } from "../actions/types";

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_AUTH:
      return action.payload;
    default:
      return state;
  }
};
