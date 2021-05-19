import React, { useState } from 'react';
//styles
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import vars from '../styles/Vars';

//styled
const FormInputWrap = styled.div`
  .helper {
    padding-left: 12px;
    padding-right: 12px;
    margin-top: 3px;
  }
  /* error */
  ${props => props.error && css`
    .helper {
      color: ${vars.colors.red};
    }
  `}
`;

const FormInput = styled.div`
  background-color:${vars.colors.grey90};
  padding: 9px 12px 12px 12px;
  border-radius: 10px;
  transition: ${vars.transitions.hover1};
  border: 2px solid ${vars.colors.grey90};
  /* active */
  ${props => props.active && css`
    border-color: ${vars.colors.grey70};
  `}
  /* error */
  ${props => props.error && css`
    border-color: ${vars.colors.red};
  `}
  label {
    display: block;
    font-size: ${rem('12px')};
    color: ${vars.colors.grey60};
    line-height: 1.33;
    margin-bottom: 3px;
  }
  input {
    display: block;
    width: 100%;
    appearance: none;
    background-clip: padding-box;
    border: none;
    background: none;
    color: ${vars.colors.grey30};
    ::placeholder {
      color: ${vars.colors.grey70};
    }
    &:focus,
    &:active {
      border: none;
      background: none;
      outline: none;
    }
  }
`;

//interfaces
interface Props {
  type: string;
  placeholder?: string;
  label?: string;
  error?: boolean;
  value?: string;
  helper?: string;
};

const Input: React.FC<Props> = ({ type, placeholder, label, error, value, helper }): JSX.Element => {

  //value
  const [inputValue, setInputValue] = useState<string | undefined>(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //focus
  const [focus, setFocus] = useState<boolean>(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleDefocus = () => {
    setFocus(false);
  };

  return (
    <FormInputWrap error={error}>
      <FormInput active={focus} error={error}>
        {label &&
          <label>{label}</label>
        }
        <input
          type={type}
          value={inputValue}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleDefocus}
          onChange={handleChange}
          />
      </FormInput>
      {helper &&
        <p className="tiny helper">{helper}</p>
      }
    </FormInputWrap>
  );
};

export default Input;