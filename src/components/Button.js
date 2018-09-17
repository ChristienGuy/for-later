import React from "react";
import styled from "styled-components";

const ButtonStyled = styled('button')`
  border: 0;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
`;

const Button = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
