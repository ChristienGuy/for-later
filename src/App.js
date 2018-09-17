import React, { Component, Fragment } from "react";
import styled from "styled-components";

import Nav from "components/Nav";
import GlobalStyle from "./GlobalStyle";
import Routes from "./Routes";
import Auth from "./Auth";
import AddBookmarkDialogue from "./components/AddBookmarkDialogue";

const SiteWrapper = styled("div")`
  padding: 16px;
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* Authentication protected routes */}
        <Auth>
          {({ user, bookmarks }) => (
            <Fragment>
              <Nav />
              <SiteWrapper>
                <Routes user={user} bookmarks={bookmarks} />
                <AddBookmarkDialogue user={user} />
              </SiteWrapper>
            </Fragment>
          )}
        </Auth>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default App;
