import React, { FC, HTMLProps } from 'react';

// components
import Wrapper, { Props as WrapperProps, Registrable } from '../FieldWrapper';

type Props = HTMLProps<HTMLTextAreaElement> & WrapperProps & Registrable;

const TextArea: FC<Props> = ({ label, error, register, ...rest }) => {
  return (
    <Wrapper {...{ label, error }}>
      <textarea ref={register} {...rest} />
    </Wrapper>
  );
};

export default TextArea;
