import React from "react";
import NavbarMenu from "../Navbar/NavbarMenu";
import BackGroundImage from "../Backgroundimage/backGroundImage";
import Footer from "../../Components/Footer/footer";
import CardGrid from "../Cards/cardGrid";

export const Home = () => {
  return (
    <div>
      <NavbarMenu />
      <BackGroundImage />
      <h1>Hilfen & Tipps zum Edelmeatllaukf</h1>
      <CardGrid />
      <Footer />
    </div>
  );
};
export default Home;
