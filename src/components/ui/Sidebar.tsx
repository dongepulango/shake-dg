import React from 'react';
import { NavLink } from 'react-router-dom';
//styles
import styled from 'styled-components';
import vars from '../styles/Vars';
//icons
import icon1 from '../../assets/images/nav-icon1.svg';
import icon2 from '../../assets/images/nav-icon2.svg';
import icon3 from '../../assets/images/nav-icon3.svg';
import icon4 from '../../assets/images/nav-icon4.svg';
import icon5 from '../../assets/images/nav-icon5.svg';

//styled
const SidebarWrap = styled.aside`
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 9;
  background-color: ${vars.colors.grey100};
  width: 64px;
  padding: 20px 12px;
`;

const SidebarIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  background-color: ${vars.colors.black};
  margin-bottom: 35px;
`;

const SidebarLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 56px;
      position: relative;
      cursor: pointer;
      &::before {
        content: "";
        display: block;
        width: 4px;
        height: 36px;
        border-radius: 2px;
        margin: auto;
        position: absolute;
        top: 0;
        left: -12px;
        bottom: 0;
        transition: ${vars.transitions.hover1};
      }
      img {
        transition: ${vars.transitions.hover1};
        opacity: 0.6;
      }
      &:hover {
        img {
          opacity: 1;
        }
      }
      &.active {
        &::before {
          background-color: ${vars.colors.purple};
        }
        img {
          opacity: 1;
        }
      }
    }
    &.user-feedback {
      a {
        &.active {
          &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            background-color: ${vars.colors.purple};
            border: solid 4px ${vars.colors.grey100};
            position: absolute;
            top: 4px;
            right: -4px;
          }
        }
      }
    }
    &.crash-reports {
      a {
        &.active {
          &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            background-color: ${vars.colors.purple};
            border: solid 4px ${vars.colors.grey100};
            position: absolute;
            top: 4px;
            right: -4px;
          }
        }
      }
    }
  }
`;

//interfaces
interface Props {
  icon?: string;
}

const Sidebar: React.FC<Props> = ({ icon }) => {
  return (
    <SidebarWrap>
      <SidebarIcon src={icon} alt="icon" />
      <SidebarLinks>
        <li className="user-feedback">
          <NavLink to="/" exact>
            <img src={icon1} alt="User Feedback" />
          </NavLink>
        </li>
        <li className="crash-reports">
          <NavLink to="/crash-reports">
            <img src={icon2} alt="Crash Reports" />
          </NavLink>
        </li>
        <li className="blank">
          <NavLink to="/blank">
            <img src={icon3} alt="Blank" />
          </NavLink>
        </li>
        <li className="users">
          <NavLink to="/users">
            <img src={icon4} alt="Users" />
          </NavLink>
        </li>
        <li className="analytics">
          <NavLink to="/analytics">
            <img src={icon5} alt="Analytics" />
          </NavLink>
        </li>
      </SidebarLinks>
    </SidebarWrap>
  );
};

export default Sidebar;