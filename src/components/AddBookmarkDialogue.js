import React, { Component } from "react";
import Menu from "components/Menu";
import BookmarkForm from "components/BookmarkForm";
import { firestore } from '../firebase';

class AddBookmarkDialogue extends Component {
  db = firestore;

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
    return (
      <Menu>
        <BookmarkForm onSubmit={this.handleBookmarkSubmit} />
      </Menu>
    );
  }
}

export default AddBookmarkDialogue;
