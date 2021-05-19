import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
//styles
import styled from 'styled-components';
//components
import PageFade from '../components/ui/PageFade';

//styled
const NotFoundWrap = styled.div`
  position: relative;
`;


const NotFound: React.FC<RouteComponentProps> = (): JSX.Element => {
  return (
    <PageFade>
      <NotFoundWrap>
        <p>404 Error: Page Not Found</p>
      </NotFoundWrap>
    </PageFade>
  );
};

export default NotFound;
