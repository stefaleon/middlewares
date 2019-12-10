import { SAVE_COMMENT, FETCH_COMMENTS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [
        ...state,
        action.payload,
        // add erroneous code, results in error after a warning from the state validator middleware
        {
          some_invalid_object: "this should not be here"
        }
      ];
    case FETCH_COMMENTS:
      const jpComments = action.payload.data.map(comment => comment.name);
      return [...state, ...jpComments];
    default:
      return state;
  }
};
