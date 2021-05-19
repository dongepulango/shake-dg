import React from 'react';
//styles
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import vars from '../styles/Vars';
import Select from 'react-select';

//styled
const SelectDropdownWrap = styled.div`
  position: relative;
  label {
    display: block;
    font-size: ${rem('12px')};
    color: ${vars.colors.grey60};
    line-height: 1.33;
    margin-bottom: 3px;
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 2;
  }
  h4 {
    font-size: ${rem('16px')};
    font-weight: 500;
    margin-bottom: 0;
    color: ${vars.colors.grey30};
  }
  p {
    font-size: ${rem('14px')};
    color: ${vars.colors.grey50};
    line-height: 1.29;
  }
`;

const customStyles = {
  singleValue: (provided) => ({
    ...provided,
    color: `${vars.colors.grey50};`
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
    border: 'none'
  }),
  control: (provided) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    backgroundColor: `${vars.colors.grey90}`,
    padding: '28px 12px 12px 12px',
  }),
  input: () => ({
    padding: 0,
    minHeight: '36px',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    display: 'block',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 0,
    transform: 'scale(0.8)',
    color: `${vars.colors.grey50}`,
    ':hover': {
      color: `${vars.colors.grey50}`,
    }
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '10px',
    backgroundColor: `${vars.colors.grey90}`,
    padding: '10px 0',
    marginTop: '4px'
  }),
  menuList: () => ({
    padding: '8px 0',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? `${vars.colors.grey80}` : `${vars.colors.grey90}`,
    cursor: 'pointer',
    transition: `${vars.transitions.hover1}`,
    ':hover': {
      backgroundColor: `${vars.colors.grey80}`,
    }
  }),
};

//interfaces
interface Props {
  name?: string;
  options: {};
  defaultValue?: {};
  label: string;
  placeholder?: string;
};

const SelectDropdown: React.FC<Props> = ({ name, options, label, placeholder, defaultValue }): JSX.Element => {
  return(
    <SelectDropdownWrap>
      {label && 
        <label>{label}</label>
      }
      <Select
        name={name}
        options={options}
        styles={customStyles}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </SelectDropdownWrap>
  );
};

export default SelectDropdown;