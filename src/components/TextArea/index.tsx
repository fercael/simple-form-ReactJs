import React from 'react';
import { ITextAreaProps } from './interfaces/textArea';

import { Wrapper, TextAreaInput, Alert } from './styles';

const TextArea: React.FC <ITextAreaProps>= ({
  name,
  isValid = true

}) => {
  return (
    <Wrapper isValid = { isValid }>
      <h2>{name}</h2>
      <TextAreaInput placeholder='Digite aqui...' name={name}/>
      <Alert isValid={isValid}>{`insira um(a) ${name} válido(a)*`}</Alert>
    </Wrapper>
  );
}

export default TextArea;