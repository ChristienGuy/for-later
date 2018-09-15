import React, { Component } from "react";
import { auth } from '../firebase';
import styled from 'styled-components';

const NavBar = styled('nav')`
  display: flex;

  padding: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
`;

const LogoutButton = styled('button')`
  margin-left: auto;
  color: #fff;
`;

class Nav extends Component {
  signOut = () => {
    auth.signOut();
  };
  render() {
    return (
      <NavBar>
        <LogoutButton onClick={this.signOut}>Logout</LogoutButton>
      </NavBar>
    );
  }
}

export default Nav;
