import styled from 'styled-components';

// theme
import { colors, fonts } from 'theme';

const Error = styled.span`
  ${fonts.text.t3}
  color: ${colors.interRed};
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default Error;
