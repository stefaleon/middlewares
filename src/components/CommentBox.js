import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
import requireAuth from "./requireAuth";

class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // call an action creator and save the comment
    this.props.saveComment(this.state.comment);

    // clear the text area
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(requireAuth(CommentBox));
