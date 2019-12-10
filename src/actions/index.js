import axios from "axios";

import { SAVE_COMMENT, FETCH_COMMENTS, TOGGLE_AUTH } from "./types";

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

// remove async-await -> the custom middleware will do the job
export const fetchComments = () => {
  const res = axios.get("http://jsonplaceholder.typicode.com/comments");

  // payload has to be a promise initially, and the resolve afterwards
  // so it will be res instead of res.data and we chain the data thing in the reducer mapping
  return {
    type: FETCH_COMMENTS,
    payload: res
  };
};

export const toggleAuth = isSignedIn => {
  return {
    type: TOGGLE_AUTH,
    payload: isSignedIn
  };
};
