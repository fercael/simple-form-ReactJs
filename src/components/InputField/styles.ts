import styled from 'styled-components';
import { IValidationField } from './interfaces/validationField';

export const Wrapper = styled.label<IValidationField>`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;

  border-radius: 6px;
  
  border: 2px solid var(${props => props.isValid == false ? props.theme.colors.alert : props.theme.colors.primary});

  > h2 {
    font-size: var(--hat-size);
    font-weight: var(--subtitle-weight);

    color: var(${props => props.theme.colors.primary});
  }
`;
export const Field = styled.input`
  max-width: 100%;
  font-size: var(--paragraph-size);
  font-weight: var(--paragraph-weight);
  
  border: none;
  background: none;
  outline: none;

  color: var(${props => props.theme.colors.paragraph});
  
  ::placeholder{

    color: var(${props => props.theme.colors.paragraph});
    opacity: 70%;
  }
`;

export const Alert = styled.span<IValidationField>`
  display: ${props => props.isValid == true ? 'none' : 'unset'};
  
  font-size: var(--hat-size);
  font-weight: var(--hat-weight);

  position: absolute;
  right: 0;
  bottom: -1.2rem;
  color: var(${props => props.theme.colors.alert});
`;
