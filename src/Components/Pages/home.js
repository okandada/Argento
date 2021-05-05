import React from "react";
import NavbarMenu from "../Navbar/NavbarMenu";

import Footer from "../../Components/Footer/footer";
import CardGrid from "../Cards/cardGrid";
import OutlinedCard from "../Cards/outlineCard";
import BackgroundImageDesktop from "../../Images/ÜberUns/Desktop/Fotos/BackgroundImageDesktop.png";

export const Home = () => {
  return (
    <div>
      <span>
        <h1>Gold & Silber Kaufen</h1>
      </span>
      <CardGrid images={Images} />
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

const Images = [
  {
    url: BackgroundImageDesktop,
    text: "hello",
    title: "Naeem",
  },
  {
    url: BackgroundImageDesktop,
    text: "hello",
    title: "Naeem",
  },
  {
    url: BackgroundImageDesktop,
    text: "hello",
    title: "Naeem",
  },
  {
    url: BackgroundImageDesktop,
    text: "hello",
    title: "Naeem",
  },
];
export default Home;
