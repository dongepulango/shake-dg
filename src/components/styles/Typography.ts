import { css, createGlobalStyle } from 'styled-components'
import { darken, rem } from 'polished';
import vars from './Vars';

//Web Fonts
import RoobertRegular1 from '../../assets/fonts/Roobert-Regular.ttf';
import RoobertRegular2 from '../../assets/fonts/Roobert-Regular.woff';
import RoobertRegular3 from '../../assets/fonts/Roobert-Regular.woff2';
import RoobertMedium1 from '../../assets/fonts/Roobert-Medium.ttf';
import RoobertMedium2 from '../../assets/fonts/Roobert-Medium.woff';
import RoobertMedium3 from '../../assets/fonts/Roobert-Medium.woff2';
import RoobertBold1 from '../../assets/fonts/Roobert-Bold.ttf';
import RoobertBold2 from '../../assets/fonts/Roobert-Bold.woff';
import RoobertBold3 from '../../assets/fonts/Roobert-Bold.woff2';

const typography = css`
  /* Roobert */
  @font-face {
    font-family: 'Roobert';
    src: url(${RoobertRegular3}) format('woff2'),
         url(${RoobertRegular2}) format('woff'),
         url(${RoobertRegular1}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Roobert';
    src: url(${RoobertMedium3}) format('woff2'),
         url(${RoobertMedium2}) format('woff'),
         url(${RoobertMedium1}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Roobert';
    src: url(${RoobertBold3}) format('woff2'),
         url(${RoobertBold2}) format('woff'),
         url(${RoobertBold1}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: fallback;
  }
  /* My Typography Styles */
  body {
    font-size: ${vars.fonts.fontSize};
    font-family: ${vars.fonts.fontFamily};
    font-weight: ${vars.fonts.fontWeight};
    line-height:  ${vars.fonts.lineHeight};
    color: ${vars.colors.white};
    background-color: ${vars.colors.black};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a,
  button {
    transition: ${vars.transitions.hover2};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
      outline: none;
    }
    &:active {
      &:focus {
        outline: none;
      }
    }
    &[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
  }
  a {
    color: ${vars.colors.grey40};
    &:hover,
    &:active,
    &:focus {
      color: ${vars.colors.grey40};
      text-decoration: underline;
    }
  }
  p {
    margin-bottom: 0;
    color: ${vars.colors.grey40};
    font-weight: 500;
    line-height: 1.25;
    + p {
      margin-top: ${rem('20px')};
    }
    &.small {
      font-size: ${rem('14px')};
      color: ${vars.colors.grey60};
      line-height: 1.29;
    }
    &.tiny {
      font-size: ${rem('12px')};
      color: ${vars.colors.grey60};
      line-height: 1.33;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${vars.colors.white};
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: ${rem('20px')};
  }
  h1 {
    font-size: ${rem('32px')};
    line-height: 1.13;
  }
  h2 {
    font-size: ${rem('24px')};
  }
  h3 {
    font-size: ${rem('20px')};
  }
  h4 {
    font-size: ${rem('16px')};
  }
`;

export const Typography = createGlobalStyle`${typography}`;

export default typography;