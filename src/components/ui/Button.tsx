//styles
import styled, { css } from 'styled-components';
import { darken, rem, rgba } from 'polished';
import vars from '../styles/Vars';

//styled
const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 10px 20px;
  font-size: ${rem('14px')};
  font-weight: bold;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  line-height: 1;
  color: ${vars.colors.white};
  background-color: ${vars.colors.purple};
  height: 48px;
  min-width: 100px;
  border-radius: 10px;
  &:hover,
  &:focus,
  &:active {
    background-color: ${darken(0.05,vars.colors.purple)};
  }
  &:active {
    transform: translateY(1px);
  }
  /* Small */
  ${props => props.small && css`
    height: 40px;
    min-width: 90px;
  `}
  /* Extra Small */
  ${props => props.extraSmall && css`
    height: 32px;
    min-width: 70px;
  `}
  /* Full */
  ${props => props.full && css`
    display: flex;
    width: 100%;
  `}
  /* With Icon */
  ${props => props.withIcon && css`
    display: flex;
    img {
      margin-right: 12px;
    }
  `}
  /* Outline */
  ${props => props.outline && css`
    border: 2px solid ${vars.colors.grey80};
    background-color: transparent;
    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
      border-color: ${vars.colors.grey70}
    }
  `}
  /* Red */
  ${props => props.red && css`
    background-color: ${vars.colors.red};
    &:hover,
    &:focus,
    &:active {
      background-color: ${darken(0.05,vars.colors.red)};
    }
  `}
  /* Disabled */
  ${props => props.disabled && css`
    opacity: 0.3;
    cursor: not-allowed;
    &:hover,
    &:focus,
    &:active {
      background-color: ${vars.colors.purple};
    }
  `}
`;

export default Button;