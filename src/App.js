import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/home';
import ContactUs from './Components/Pages/contact';
import About from './Components/Pages/about';

 

function App() {
  return (
    
    <Router>
      
      
      <Switch>
      <Route path='/' exact component ={Home}/>
      <Route path='/home'  component ={Home}/>
      <Route path='/about'  component ={About}/>
      <Route path= '/contact'  component ={ContactUs}/>
    
      </Switch>
    

      
    </Router>
   
  );
};

export default App;
