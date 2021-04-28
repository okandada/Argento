import React from 'react'

import NavbarMenu from '../Navbar/NavbarMenu';
 import MediaCard from '../Cards/cards';
 import Image from '../../Images/bg-image.jpg';
 import BackGroundImage from '../Backgroundimage/backGroundImage';
 import Footer from '../../Components/Footer/footer';



export const Home = () => {
    return (
        <div>
            <NavbarMenu/>
      <BackGroundImage/>
      <MediaCard/>
      <MediaCard/>
      <MediaCard/>
      <MediaCard/>
      <Footer/>
   

            
        </div>
    );
};
export default Home;