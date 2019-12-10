export default ({ dispatch }) => next => action => {
  debugger;

  // if the action is not a promise, next it
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // resolve and dispatch
  action.payload.then(response => {
    //ovrwrite the payload with the response data
    const newAction = { ...action, payload: response };
    //and dispatch
    dispatch(newAction);
  });
};
