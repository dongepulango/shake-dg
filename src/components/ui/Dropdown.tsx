import React from 'react';
//styles
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import vars from '../styles/Vars';
import Select from 'react-select';
//assets
import dropdownIcon from '../../assets/images/icon-dropdown.svg';

//styled
const DropdownWrap = styled.div`
  position: relative;
  display: inline-flex;
  p {
    font-size: ${rem('14px')};
    color: ${vars.colors.grey50};
    line-height: 1.29;
  }
`;

const customStyles = {
  container: () => ({
    display: 'inline-flex',
    alignItems: 'flex-end'
  }),
  singleValue: () => ({
    display: 'none'
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
    height: '20px',
    minHeight: '20px',
    background: 'none',
    //width: '200px'
  }),
  input: () => ({
    padding: 0,
    display: 'none'
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
    width: '20px',
    height: '20px',
    backgroundImage: `url(${dropdownIcon})`,
    backgroundSize: '20px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    '& svg': {
      display: 'none'
    }
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '10px',
    backgroundColor: `${vars.colors.grey90}`,
    padding: '10px 0',
    width: '160px',
    right: '0',
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
};

const Dropdown: React.FC<Props> = ({ name, options, defaultValue }): JSX.Element => {
  return(
    <DropdownWrap>
      <Select
        name={name}
        options={options}
        styles={customStyles}
        defaultValue={defaultValue}
      />
    </DropdownWrap>
  );
};

export default Dropdown;