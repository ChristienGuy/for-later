import React from 'react';
import styled from 'styled-components';

const InputStyled = styled("input")`
  transition: box-shadow 0.2s ease-out;

  padding-left: 16px;
  min-height: 44px;
  font-size: 1rem;
  line-height: 1.5;

  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.primaryMid};
  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryMid};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryGray}
  }
`;

const Input = (props) => {
  return <InputStyled {...props} />;
};

export default Input;
