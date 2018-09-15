import React, { Component, Fragment } from "react";
import { AuthState } from "constants/AuthState.constants";
import { auth, firestore } from "./firebase";

import Login from "pages/Login";

class Auth extends Component {
  state = {
    user: null,
    bookmarks: [],
    authState: AuthState.LOADING
  };

  componentDidMount() {
    this.db = firestore;

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user, authState: AuthState.AUTHENTICATED });
      } else {
        this.setState({ user, authState: AuthState.NOT_AUTHENTICATED });
      }
    });
  }

  // TODO: move bookmark fetching logic out of Auth
  getBookmarks = async user => {
    const { docs } = await this.db
      .collection("users")
      .doc(user.uid)
      .collection("bookmarks")
      .get();

    const bookmarks = [];
    docs.forEach(doc => bookmarks.push({
      ...doc.data(),
      id: doc.id
    }));

    this.setState({
      bookmarks
    });
  };

  renderChildren() {
    const { children } = this.props;
    const { user, authState } = this.state;

    switch (authState) {
      case AuthState.LOADING:
        return <p>loading</p>;
      case AuthState.NOT_AUTHENTICATED:
        return <Login />;
      case AuthState.AUTHENTICATED:
        this.getBookmarks(user);
        return children({ user, bookmarks: this.state.bookmarks });
      default:
        break;
    }
  }

  render() {
    return <Fragment>{this.renderChildren()}</Fragment>;
  }
}

export default Auth;
