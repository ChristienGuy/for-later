import React from "react";
import styled from "styled-components";

const LabelStyled = styled("label")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 1px;

  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Label = ({ children }) => <LabelStyled>{children}</LabelStyled>;

export default Label;
