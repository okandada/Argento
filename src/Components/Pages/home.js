import React from "react";
import CardGrid from "../Cards/cardGrid";
import BuyGoldNr1 from "../../Images/Home/Desktop/Fotos/BuyGoldNr1.png";
import BuySilverNr2 from "../../Images/Home/Desktop/Fotos/BuySilverNr2.png";
import BuyGoldNr3 from "../../Images/Home/Desktop/Fotos/BuyGoldNr3.png";
import BuyGoldNr4 from "../../Images/Home/Desktop/Fotos/BuyGoldNr4.png";
import YellowStroke from "../../Images/ÜberUns/Desktop/SVG/YellowStroke.svg";
// import HilfeCardGrid from "../../Components/Cards/hilfenTipsCard";
// import HilfenTipsCardText from "../Cards/hilfenTipsCard";

export const Home = () => {
  return (
    <div>
      <h1>
        Gold & Silber Kaufen
        <div className="dash">
          <img src={YellowStroke} alt="" />
        </div>
      </h1>

      <CardGrid images={Images} />
      <h1>
        Aktuelle Ankaufkurse
        <div className="dash">
          <img src={YellowStroke} alt="" />
        </div>
        {/* <HilfeCardGrid HilfecardImage={HilfenTipsCardText} /> */}
      </h1>
      <span>
        <h1>Hilfen & Tipps zum Edelmeatllaukf</h1>
      </span>
    </div>
  );
};

const Images = [
  {
    url: BuyGoldNr1,

    text: "Unze Gold",
  },
  {
    url: BuySilverNr2,
    text: "Unze Gold",
  },
  {
    url: BuyGoldNr3,
    text: "hello",
  },
  {
    url: BuyGoldNr4,
    text: "hello",
  },
];
export default Home;
