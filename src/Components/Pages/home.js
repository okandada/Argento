import React from "react";
import NavbarMenu from "../Navbar/NavbarMenu";
import BackGroundImage from "../Backgroundimage/backGroundImage";
import Footer from "../../Components/Footer/footer";
import CardGrid from "../Cards/cardGrid";
import OutlinedCard from "../Cards/outlineCard";


export const Home = () => {
  return (
    <div>
      
      <BackGroundImage />
      <span>
      <h1>Gold and Silber Kaufen& </h1>
      </span>
      <CardGrid />
      <span>
      <h1>Hilfen & Tipps zum Edelmeatllaukf</h1>
      </span>
      {/* <OutlinedCard/>
      <OutlinedCard/>
      <OutlinedCard/>
      <OutlinedCard/> */}
      </div>
      
  );
};
export default Home;
