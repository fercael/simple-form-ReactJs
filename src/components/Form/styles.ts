import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 100%;
  max-width: 448px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border: 2px dotted green;
`;

export const FormTitle = styled.h1`
  width: 100%;

  font-size: var(--title-size);
  font-weight: var(--title-weight);
  text-align: center;

  color: var(${props => props.theme.colors.title});
`;

export const Checkbox = styled.input`
  width: 2rem;
  height: 2rem;

  border-radius: 6px;

  background: transparent;
  border: 2px solid var(${props => props.theme.colors.primary});
`;

export const CheckboxLabel = styled.label`
  height: 2rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: var(--paragraph-size);
  font-weight: var(--paragraph-weight);

  color: var(${props => props.theme.colors.paragraph});

  > p > strong {
    color: var(${props => props.theme.colors.secondary});
  }
`;

export const Submit = styled.button`
  width: 11rem;
  height: 3.375rem;

  display: flex;
  justify-content: center;
  align-items: center;

  align-self: flex-end;

  border-radius: 6px;
  
  font-size: var(--subtitle-size);
  font-weight: var(--subtitle-weight);
  
  color: var(${props => props.theme.colors.background});
  background: var(${props => props.theme.colors.primary});

  :hover{
    cursor: pointer;
  }
`;