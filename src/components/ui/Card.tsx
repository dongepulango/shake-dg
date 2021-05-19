import React from 'react';
//styles
import styled from 'styled-components';
import vars from '../styles/Vars';

//styled
const CardWrap = styled.div`
  position: relative;
  padding: 32px;
  border-radius: 15px;
  background-color: ${vars.colors.grey100};
  //temp
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;


const Card: React.FC = ({ children }) => {
  return (
    <CardWrap>
      {children}
    </CardWrap>
  );
};

export default Card;