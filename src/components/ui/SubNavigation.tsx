import React, { useState } from 'react';
//styles
import styled from 'styled-components';
import vars from '../styles/Vars';
//assets
import caretRight from '../../assets/images/icon-caret-right.svg';

//styled
const SubNavigationWrap = styled.nav`
  position: relative;
  padding: 16px 20px 16px 0;
  min-width: 200px;
  max-width: 252px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      display: block;
      position: relative;
      padding: 14px 16px;
      line-height: 1.25;
      border-radius: 10px;
      transition: ${vars.transitions.hover1};
      cursor: pointer;
      &:hover {
        text-decoration: none;
        color: ${vars.colors.grey60};
      }
      &::after {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        margin-left: 6px;
        background-image: url(${caretRight});
        background-repeat: no-repeat;
        background-position: center;
        margin: auto;
        position: absolute;
        top: 0;
        right: 12px;
        bottom: 0;
      }
      &.active {
        background-color: ${vars.colors.purple};
        &:hover {
          color: ${vars.colors.grey10};
        }
      }
    }
  }
`;

//interfaces
interface Link {
  id: number;
  name: string;
};

interface Props {
  links: Array<Link>;
  activeTab: number;
  changeTab: (id: number) => void;
};

const SubNavigation: React.FC<Props> = ({ links, activeTab, changeTab }) => {

  return (
    <SubNavigationWrap>
      <ul>
        {links.map((item) => (
          <li 
            key={item.id}
            className={activeTab === item.id ? 'active' : ''}
            onClick={() => changeTab(item.id)}
            >
            {item.name}
          </li>
        ))}
      </ul>
    </SubNavigationWrap>
  );
};

export default SubNavigation;