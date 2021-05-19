import React, { useRef, useState } from 'react';
//styles
import styled from 'styled-components';

//styled
const SampleWrap = styled.div`
  position: relative;
`;

//interfaces
interface Props {
  text: string;
  active?: boolean;
  id?: number;
  fn?: (bob: string) => void;
  obj?: {
    f1: string
  } 
};

const Sample: React.FC<Props> = ({ text }) => {

  const [state, setState] = useState<boolean | null>(false);

  const myRef = useRef<HTMLDivElement>(null);

  return (
    <SampleWrap ref={myRef}>
      <p>{text}</p>
    </SampleWrap>
  );
};

export default Sample;