import React, { useEffect, useState } from 'react';
import { validateInput } from './functions/validateInput';
import { IInputField } from './interfaces/inputField';

import { Alert, Field, Wrapper } from './styles';

const InputField: React.FC<IInputField> = ({
  type = 'text',
  name,
  isValid = true
}) => {
  const [ inputValue, setInputValue ] = useState('')
  const [ status, setStatus ] = useState(isValid)
  useEffect(() => {
    setStatus(validateInput(name , inputValue))
  },[inputValue])
  return (
    <Wrapper name={name} isValid={status}>
      <h2>{name}</h2>
      <Field type={type} placeholder={`Digite aqui...`} value={inputValue} onChange={event => setInputValue(event.target.value)} />
      <Alert isValid={status}>{`insira um(a) ${name} válido(a)*`}</Alert>
    </Wrapper>
  );
}

export default InputField;