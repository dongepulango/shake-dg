import React from 'react';
//styles
import styled from 'styled-components';
//assets
import caretRight from '../../assets/images/icon-caret-right.svg';
import instagram from '../../assets/images/instagram.png';

//styled
const NavigationWrap = styled.nav`
  position: relative;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-right: 6px;
        &::after {
          content: "";
          display: block;
          width: 24px;
          height: 24px;
          margin-left: 6px;
          background-image: url(${caretRight});
          background-repeat: no-repeat;
          background-position: center;
          opacity: 0.35;
        }
      }
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        margin-right: 8px;
        img {
          max-width: 100%;
          height: auto;
          transform: translateZ(0);
        }
      }
    }
  }
`;

const Navigation: React.FC = () => {
  return (
    <NavigationWrap>
      <ul>
        <li>Crash reports</li>
        <li><img src={instagram} alt="Instagram" className="icon" /> Instagram</li>
        <li>MPMoPubNativeAdAdapter.m line 83</li>
      </ul>
    </NavigationWrap>
  );
};

export default Navigation;