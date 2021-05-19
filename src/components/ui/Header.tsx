import React from 'react';
//styles
import styled from 'styled-components';
import vars from '../styles/Vars';

//styled
const HeaderWrap = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${vars.colors.grey100};
`;


const Header: React.FC = ({ children }) => {
  return (
    <HeaderWrap>
      {children}
    </HeaderWrap>
  );
};

export default Header;