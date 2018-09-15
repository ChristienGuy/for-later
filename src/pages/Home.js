import React, { Component } from "react";
import { firestore } from "../firebase";

const Bookmarks = ({ bookmarks }) => (
  <ul>
    {bookmarks.map(bookmark => (
      <li key={bookmark.id}><a href={bookmark.url}>{bookmark.title}</a></li>
    ))}
  </ul>
);

class HomePage extends Component {
  db = firestore;

  render() {
    return (
      <div>
        <Bookmarks bookmarks={this.props.bookmarks} />
      </div>
    );
  }
}

export default HomePage;
