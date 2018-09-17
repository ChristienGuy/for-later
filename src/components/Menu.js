import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);

  padding: 16px;
`;

const Menu = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Menu;
