import React, { useState } from 'react';
//styles
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import vars from '../styles/Vars';
//assets
import checkIcon from '../../assets/images/icon-check.svg';

//styled
const InputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 24px;
  cursor: pointer;
  &::before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 5px;
    border: solid 2px ${vars.colors.grey50};
    transition: ${vars.transitions.hover1};
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
  }
  &::after {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 5px;
    background-color: ${vars.colors.purple};
    background-image: url(${checkIcon});
    background-position: center;
    background-repeat: no-repeat;
    transition: ${vars.transitions.hover1};
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  /* checked */
  ${props => props.checked && css`
    &::after {
      opacity: 1;
    }
  `}
  /* with icon */
  ${props => props.withIcon && css`
    padding-left: 16px;
    &::before,
    &::after {
      bottom: 0;
    }
  `}
  input {
    display: none;
    visibility: hidden;
  }
  .image-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-left: 8px;
    margin-right: 8px;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  label {
    margin-bottom: 0;
    font-size: ${rem('14px')};
    cursor: pointer;
  }
`;

//interfaces
interface Props {
  name?: string;
  checked?: boolean;
  label?: string;
  icon?: string;
};

const Input: React.FC<Props> = ({ name, checked, label, icon }): JSX.Element => {

  const [isChecked, setChecked] = useState<boolean | undefined>(checked);

  const handleCheck = () => {
    setChecked(!isChecked);
  };

  return(
    <InputWrap onClick={handleCheck} checked={isChecked} withIcon={icon}>
      <input type="checkbox" name={name} checked={isChecked} readOnly/>
      {icon &&
        <div className="image-wrap">
          <img src={icon} alt="Icon" />
        </div>
      }
      {label &&
        <label>{label}</label>
      }
    </InputWrap>
  );
};

export default Input;