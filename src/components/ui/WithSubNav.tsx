import React from 'react';
//styles
import styled from 'styled-components';

//styled
const WithSubNavWrap = styled.div`
  display: flex;
  > * {
    flex: 1;
  }
`;

const WithSubNav: React.FC = ({ children }) => {
  return (
    <WithSubNavWrap>
      {children}
    </WithSubNavWrap>
  );
};

export default WithSubNav;