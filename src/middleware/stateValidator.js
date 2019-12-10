import tv4 from "tv4";
import stateSchema from "./stateSchema";

export default ({ dispatch, getState }) => next => action => {
  // call next in order to reach the reducers, produce state and then validate
  next(action);

  // get the state
  const newState = getState();

  // validate
  if (!tv4.validate(newState, stateSchema)) {
    console.warn("Invalid state schema detected");
  }
};
