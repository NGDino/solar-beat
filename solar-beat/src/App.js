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
import Equipment from './pages/Equipment';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/equipment'  component = {Equipment} />
          <Route exact path = '/estimate'  component = {Calculator} />
          <Route exact path = '/contact'  component = {Contact} />
        </Switch>
        

      </Router>
      
        
    </div>
  );
}

export default App;
