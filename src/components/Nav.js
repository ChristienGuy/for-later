import React, { Component } from "react";
import { Link } from '@reach/router';

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
  background-color: transparent;
  border: none;
`;

const NavLink = styled(Link)`
  color: #fff;
  margin-right: 16px;

  &:last-of-type {
    margin-right: 0;
  }
`;
class Nav extends Component {
  signOut = () => {
    auth.signOut();
  };
  render() {
    return (
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-bookmark">Add</NavLink>
        <LogoutButton onClick={this.signOut}>Logout</LogoutButton>
      </NavBar>
    );
  }
}

export default Nav;
