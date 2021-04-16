import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';

//fonts
import HelmetNeue from './assets/fonts/HelmetNeue-Regular.woff';

const helmet = {
  fontFamily: 'HelmetNeue',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
  local('HelmetNeue'),
  local('HelmetNeue-Regular'),
  url(${HelmetNeue}) format('woff')
  `
}

const theme = createMuiTheme({
  typography : {
    fontFamily: [
      'HelmetNeue'
    ]
  },
  overrides:{
    MuiCssBaseline: {
      '@global':{
        '@font-face':[helmet]
      }
    }
  },
  palette:{
    primary: {
      main: '#e0e0e0'
    },
    secondary: {
      main: '#dd2c00',
      light: '#fff176'
    },
    typography: {
      fontFamily : 'Comic Sans MS'
    }
  
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
