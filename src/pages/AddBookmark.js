import React, { Component } from "react";
import { firestore } from "../firebase";

import BookmarkForm from "components/BookmarkForm";

class AddBookmarkPage extends Component {
  componentDidMount() {
    this.db = firestore;
  }

  render() {
    return <BookmarkForm  />;
  }
}

export default AddBookmarkPage;
