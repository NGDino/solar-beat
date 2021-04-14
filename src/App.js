// import logo from './logo.svg';
import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Route, 
  Switch 
} from 'react-router-dom';

//theme
//pages
import Home from './pages/Home';
import Header from './components/Header';
// import Equipment from './pages/Equipment';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import CalcResults from './pages/CalcResults';
import Footer from './components/Footer'
// const theme = createMuiTheme({
//   palette:{
//     primary: orange
//   }
// })


function App() {
  return (
    <div className="App">
      <Router>
      {/* <ThemeProvider theme={theme}> */}
        <Header/>
        <Switch>
          <Route exact path = '/' component = {Home} />
          {/* <Route exact path = '/'  component = {Equipment} /> */}
          <Route exact path = '/estimate'  component = {Calculator} />
          <Route exact path = '/contact'  component = {Contact} />
          <Route exact path = '/results'  component = {CalcResults} />
        </Switch>
        <Footer/>
        {/* </ThemeProvider> */}
      </Router>
      
        
    </div>
  );
}

export default App;
