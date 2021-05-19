//styles
import styled, { css } from 'styled-components';
import { rem } from 'polished';

//styled
const Heading = styled.h1`
  font-size: ${props => props.fontSize ? rem(props.fontSize + 'px') : rem('32px')};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'bold'};
  line-height: ${props => props.lineHeight ? props.lineHeight : 1.2};
  margin-bottom: ${props => props.marginBottom ? rem(props.marginBottom + 'px') : rem('20px')};
  /* Heading1 */
  ${props => props.heading1 && css`
    font-size: ${props => props.fontSize ? rem(props.fontSize + 'px') : rem('32px')};
    line-height: ${props => props.lineHeight ? props.lineHeight : 1.13};
  `}
  /* Heading2 */
  ${props => props.heading2 && css`
    font-size: ${props => props.fontSize ? rem(props.fontSize + 'px') : rem('24px')};
    line-height: ${props => props.lineHeight ? props.lineHeight : 1.33};
  `}
  /* Heading3 */
  ${props => props.heading3 && css`
    font-size: ${props => props.fontSize ? rem(props.fontSize + 'px') : rem('20px')};
  `}
`;

export default Heading;