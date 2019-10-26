import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import StartPage from './containers/StartPage/StartPage';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Varela Round','sans-serif'].join(','),
    spacing: 8
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <StartPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
