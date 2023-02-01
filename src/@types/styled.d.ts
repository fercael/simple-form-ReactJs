import 'styled-components';

declare module 'styled-components'{
  export interface DefaultTheme {
    name: string,
    colors:{
      background: string,
      primary: string,
      secondary: string,
      alert: string,
      title: string,
      subtitle: string,
      paragraph: string
    }
  }
}