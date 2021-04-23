import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

//fonts
import HelmetNeue from './assets/fonts/HelmetNeue-Regular.woff';
import LondrinaSolid  from './assets/fonts/LondrinaSolid-Regular.woff'

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

const londrina = {
  fontFamily: 'LondrinaSolid',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
  local('LondrinaSolid'),
  local('LondrinaSolid-Regular'),
  url(${LondrinaSolid}) format('woff')
  `
}

const theme = createMuiTheme({
  typography : {
    fontFamily: [
      'LondrinaSolid', 'HelmetNeue'
    ],
    h5: {
      fontSize:'1.5rem'
    }, 
    h4: {
      fontSize:'2.5rem'
    },
    subtitle1: {
      fontSize:'1.25rem'
    },
    body2:{
      fontFamily: [helmet],
      fontSize: '1.1rem'
    },
   
  },
  overrides:{
    MuiCssBaseline: {
      '@global':{
        '@font-face':[londrina, helmet]
      },
      
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
    listItemText:{
      fontSize:'0.7em',//Insert your required size
    }

  
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
