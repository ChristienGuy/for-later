import React, { Component } from "react";
import { firestore } from "../firebase";

import BookmarkForm from "components/BookmarkForm";

class AddBookmarkPage extends Component {
  componentDidMount() {
    this.db = firestore;
  }
  handleBookmarkSubmit = bookmark => {
    const { user } = this.props;

    this.db
      .collection("users")
      .doc(user.uid)
      .collection("bookmarks")
      .add({
        url: bookmark.url,
        title: bookmark.title
      });
  };

  render() {
    return <BookmarkForm onSubmit={this.handleBookmarkSubmit} />;
  }
}

export default AddBookmarkPage;
