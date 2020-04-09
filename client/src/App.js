import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';


function App() {
  return (
    <Router>
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" /> 
    <div>
    <Link to = "/">Home </Link><br />
        <Link to = "/otherPage">Other Page</Link>
          <Route exact path = "/" component = {Fib} />
          <Route path = "/otherPage" component = {OtherPage} />
        </div>
      
    </div>
    </Router>
  );
}

export default App;
