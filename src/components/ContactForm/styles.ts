import styled from 'styled-components';

export const Container = styled.main`
  width: 1216px;
  min-height: 2rem;
  max-height: 616px;
  
  display: flex;
  justify-content: center;
  gap: 2rem;

  overflow: hidden;

  @media ( max-width: 1216px){
    max-width: 768px;
    > img {
      display: none;
    }
  }
  @media ( max-width: 768px){
    max-width: 375px;
  }`;