import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/home';
import ContactUs from './Components/Pages/contact';
import About from './Components/Pages/about';

 import NavbarMenu from './Components/Navbar/NavbarMenu';
 import MediaCard from './Components/Cards/cards';
 import Image from '../src/Images/bg-image.jpg';
 import BackGroundImage from '../src/Components/Backgroundimage/backGroundImage';
 import Footer from './Components/Footer/footer';



function App() {
  return (
    
    <Router>
      <NavbarMenu/>
      <BackGroundImage/>
      <MediaCard/>
      <MediaCard/>
      <MediaCard/>
      <MediaCard/>
      <Footer/>
      {/* <RecipeReviewCard/> */}
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