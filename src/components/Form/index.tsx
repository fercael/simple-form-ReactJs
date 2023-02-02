import React from 'react';

import { Checkbox, CheckboxLabel, FormTitle, Submit, Wrapper } from './styles';

const Form: React.FC = () => {
  return (
    <Wrapper>
      <FormTitle>Fale conosco!</FormTitle>
      <CheckboxLabel >
        <Checkbox type='checkbox' name='subscribe' id='subscribe' />
        <p>Eu gostaria de receber <strong>notícias</strong> via email.</p>
      </CheckboxLabel>
      <Submit type='submit'>Enviar</Submit>
    </Wrapper>
  );
}

export default Form;