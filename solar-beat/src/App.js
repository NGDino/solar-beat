import logo from './logo.svg';
import './App.css';

//theme
//pages
import Home from './pages/Home'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
          <Header/>
          <Home/>
    </div>
  );
}

export default App;
