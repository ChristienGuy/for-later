import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const LabelStyled = styled("label")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  font-size: .875rem;
  line-height: 1.5;

  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Label = ({ children, theme }) => <LabelStyled theme={theme}>{children}</LabelStyled>;

Label.defaultProps = {
  theme: theme
};

export default Label;
