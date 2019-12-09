import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
import CommentsFetch from "./components/CommentsFetch";
import { toggleAuth } from "./actions";

import "./App.css";

const header = (buttonClickAction, isSignedIn) => {
  return (
    <ul className="header">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post</Link>
      </li>
      <li>
        <Link to="/fetch">Fetch</Link>
      </li>
      <li>{authButton(buttonClickAction, isSignedIn)}</li>
    </ul>
  );
};

const authButton = (clickAction, isSignedIn) => {
  return (
    <button onClick={() => clickAction(!isSignedIn)}>
      {isSignedIn ? "Sign Out" : "Sign In"}
    </button>
  );
};

function App({ toggleAuth, auth }) {
  return (
    <div className="App">
      {header(toggleAuth, auth)}
      <Route path="/post" component={CommentBox} />
      <Route path="/fetch" component={CommentsFetch} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { toggleAuth })(App);
