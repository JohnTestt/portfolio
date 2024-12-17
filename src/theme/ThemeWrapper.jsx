import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/theme';
import { GlobalStyle } from '../global';
import { ThemeProvider, useTheme } from './ThemeContext';
import App from '../App';

const ThemeApp = () => {
    
    const {darkMod} = useTheme();

    return(
        <StyledThemeProvider theme = {darkMod ? darkTheme : lightTheme}>
            <GlobalStyle/>
            <App />
        </StyledThemeProvider>
    );

};

const ThemeWrapper = () => {
    return (
      <ThemeProvider>
        <ThemeApp />
      </ThemeProvider>
    );
  };

  export default ThemeWrapper;