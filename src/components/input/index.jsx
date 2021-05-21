import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.input`
    height: 36px;
    width: 250px;
    border: none;
    outline: none;
    color: #000000;
    padding: 2px 3px;
    font-size: ${({ size }) => (size ? size + "px" : "16px")};
    font-weight: 200px;
    border-radius: 6px;
    background-color: #FFFFFF;

    &:focus {
        outline: none;
      }
`;

export function Input(props) {
    const { size, value } = props;
  
    return (
      <InputWrapper size={size} className={props.className}  placeholder={value} />
    );
  }
  