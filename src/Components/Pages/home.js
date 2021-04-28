import React from "react";

import NavbarMenu from "../Navbar/NavbarMenu";

import Image from "../../Images/bg-image.jpg";
import BackGroundImage from "../Backgroundimage/backGroundImage";
import Footer from "../../Components/Footer/footer";
import CardGrid from "../Cards/cardGrid";

export const Home = () => {
  return (
    <div>
      <NavbarMenu />
      <BackGroundImage />

      <CardGrid />

      <Footer />
    </div>
  );
};
export default Home;
