import styled from 'styled-components';

export const Container = styled.main`
  width: 1216px;
  min-height: 2rem;
  
  display: flex;
  justify-content: flex-end;

  @media ( max-width: 1216px){
    max-width: 768px;
  }
  @media ( max-width: 768px){
    max-width: 375px;
  }
`;
