import React from 'react';
//styles
import styled from 'styled-components';
import icon from '../../assets/images/icon-question.svg';

//styled
const InfoBlockWrap = styled.div`
  position: relative;
  img {
    margin-bottom: 8px;
  }
`;

const InfoBlock: React.FC = ({ children }) => {
  return (
    <InfoBlockWrap>
      <img src={icon} alt="Question" />
      <p className="small">{children}</p>
    </InfoBlockWrap>
  );
};

export default InfoBlock;