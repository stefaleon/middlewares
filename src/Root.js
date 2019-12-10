import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//import reduxPromise from "redux-promise";
import myAsync from "./middleware/async";
import stateValidator from "./middleware/stateValidator";

import reducers from "./reducers";

const Root = ({ children, initialState }) => {
  return (
    <Provider
      store={createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(myAsync, stateValidator))
      )}
    >
      {children}
    </Provider>
  );
};

export default Root;
