import React from 'react';
//styles
import styled from 'styled-components';
import { rem } from 'polished';
import vars from '../styles/Vars';
//tooltip
import ReactTooltip from "react-tooltip";

//styled
const TooltipWrap = styled.span`
  display: inline;
  color: ${vars.colors.purple};
  cursor: pointer;
  .__react_component_tooltip {
    display: inline-block;
    border-radius: 5px;
    box-shadow: 0 2px 13px 0 ${vars.colors.black};
    border: solid 1px ${vars.colors.grey100};
    background-color: #1F1F21;
    margin-top: -5px!important;
    font-size: ${rem('14px')};
    color: ${vars.colors.grey30};
    line-height: 1.29;
    padding: 8px 12px;
    &.show {
      opacity: 1;
    }
    &::after {
      display: none;
    }
  }
`;

//interfaces
interface Props {
  text: string;
  tip: string;
}

const Tooltip: React.FC<Props> = ({ text, tip }) => {
  return (
    <TooltipWrap data-tip={tip}>
      {text}
      <ReactTooltip
        place="top"
        effect="solid"
        wrapper="span"
      />
    </TooltipWrap>
  );
};

export default Tooltip;