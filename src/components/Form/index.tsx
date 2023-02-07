import React from 'react';
import InputField from '../InputField';
import TextArea from '../TextArea';

import { Checkbox, CheckboxLabel, FormTitle, Submit, Wrapper } from './styles';

const Form: React.FC = () => {
  return (
    <Wrapper>
      <FormTitle>Fale conosco!</FormTitle>
      <InputField name='nome'/>
      <InputField name='email'/>
      <InputField name='assunto'/>
      <TextArea name= 'mensagem'/>
      <CheckboxLabel >
        <Checkbox type='checkbox' name='subscribe' id='subscribe' />
        <p>Eu gostaria de receber <strong>notícias</strong> via email.</p>
      </CheckboxLabel>
      <Submit type='submit'>Enviar</Submit>
    </Wrapper>
  );
}

export default Form;