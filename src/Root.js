import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxPromise from "redux-promise";

import reducers from "./reducers";

const Root = ({ children, initialState }) => {
  return (
    <Provider
      store={createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(reduxPromise))
      )}
    >
      {children}
    </Provider>
  );
};

export default Root;
