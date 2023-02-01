import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    width: 100vw;
    min-height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

  html {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;

    background: var(${ props => props.theme.colors.background });

    @media (max-width: 768px){
      font-size: 14px;
    }
  }

  :root{
    --light-background:#F7F6F9;
    --dark-primary:#69557C;
    --dark-secondary:#596A49;
    --dark-alert:#923F3F;
    --dark-title:#25222B;
    --dark-subtitle:#3E3847;
    --dark-paragraph:#574F64;

    --dark-background:#1A151E;
    --light-primary:#A695B6;
    --light-secondary:#A5B695;
    --light-alert:#C98282;
    --light-title:#F2F1F4;
    --light-subtitle:#D7D4DD;
    --light-paragraph:#BDB8C7;

    --title-size: 1.25rem;
    --subtitle-size: 1.125rem;
    --paragraph-size: 1rem;
    --hat-size: 0.75rem;

    --title-weight: 700;
    --subtitle-weight: 600;
    --paragraph-weight: 400;
    --hat-weight: 200;
  }
`;