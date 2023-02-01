import { ThemeProvider } from 'styled-components';
import { ContactForm } from './components/ContactForm';
import GlobalStyles from './styles/globalStyles'
import * as themes from './styles/themes';

function App() {
  return (
    <>
      <ThemeProvider theme={themes.dark}>
        <ContactForm />
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default App
