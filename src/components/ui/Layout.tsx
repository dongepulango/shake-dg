import React from 'react';
//styles
import styled from 'styled-components';

//styled
const LayoutWrap = styled.main`
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
`;

const Layout = ({ children }): JSX.Element => {
  return (
    <LayoutWrap>
      {children}
    </LayoutWrap>
  );
};

export default Layout;