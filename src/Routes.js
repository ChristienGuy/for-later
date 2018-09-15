import React, { Fragment } from "react";
import { Router } from "@reach/router";

import Home from 'pages/Home';
import Dash from 'pages/Dash';
import AddBookmark from 'pages/AddBookmark';

const Routes = ({ user, bookmarks }) => (
  <Fragment>
    <Router>
      <Home user={user} bookmarks={bookmarks} path="/" />
      <Dash user={user} path="/dash" />
      <AddBookmark user={user} path="/add-bookmark" />
    </Router>
  </Fragment>
);

export default Routes;
