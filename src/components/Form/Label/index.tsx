import { HTMLProps } from 'react';
import styled from 'styled-components';

// theme
import fonts from 'theme/fonts';

type Props = HTMLProps<HTMLSpanElement>;

const Label = styled.span<Props>`
  ${fonts.text.t2}
`;

export default Label;
