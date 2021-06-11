import React from "react";
import CardGrid from "../Cards/cardGrid";
import BuyGoldDesktop1 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop1.jpg";
import BuyGoldDesktop2 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop2.jpg";
import BuyGoldDesktop3 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop3.jpg";
import BuyGoldDesktop4 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop4.jpg";
import YellowStroke from "../../Images/ÜberUns/Desktop/SVG/YellowStroke.svg";
import NewsletterDesktop from "../../Images/Home/Desktop/Fotos/NewsletterDesktop.jpg";
import GOldCourseDesktop from "../../Images/Home/Desktop/Fotos/GOldCourseDesktop.jpg";
import HilfenTipsCard from "../../Components/Cards/hilfenTipsCard";
import "./home.css";
import NewsLetter from "../Newsletter/NewsLetter";
import GoldPrice from "../GolgPrice/GoldPrice";
import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";
import { BgImage } from "../../Components/ConditionalRendering/Rendering";
import logo from "../../Images/ÜberUns/Desktop/Fotos/logo.png";
import { BrowserRouter as Link } from "react-router-dom";
import FooterDesktop from "../Footer/footer";
export const Home = () => {
  return (
    <div>
      <BgImageComponent bgImage={BgImage} />
      <h2>
        Gold & Silber Kaufen
        <div className="dash">
          <img src={YellowStroke} alt="" />
        </div>
      </h2>
      <CardGrid images={Images} />

      <h2>
        Aktuelle Ankaufkurse
        <div className="dash">
          <img src={YellowStroke} alt="" />
        </div>
      </h2>
      <container>
        <div className="container-text">
          <img src={GOldCourseDesktop} height="100%" width="100%" alt="" />
          <div className="text-price">
            <GoldPrice
              firstTitle="Goldpreis in Euro"
              subTitle="je Feinunze(31,103g)"
              price="1.449.68 EUR"
              price_subtitle_left="-0.75%"
              price_subtitle_right="-10.28 Euro"
            ></GoldPrice>
            <GoldPrice
              firstTitle="Goldpreis in Silber"
              subTitle="je Feinunze (31,103g)"
              price="21,21 EUR"
              price_subtitle_left="-0.75%"
              price_subtitle_right="-10.28 Euro"
            ></GoldPrice>
          </div>
        </div>
      </container>
      {/* <OutlinedCard /> */}
      <h2>
        Hilfen & Tipps zum Edelmeatllaukf
        <div className="dash">
          <img src={YellowStroke} alt="" />
        </div>
      </h2>
      <HilfenTipsCard />
      <h2>
        Newsletter
        <div className="dash">
          <img src={YellowStroke} alt="" />
        </div>
      </h2>
      <container style={{ maxWidth: "1000px" }}>
        <div
          className="container-text"
          style={{ maxWidth: "1000px", float: "left" }}
        >
          <img
            src={NewsletterDesktop}
            style={{ height: "400px", width: "100%" }}
            alt=""
          />
        </div>
        <div
          className="text-price"
          style={{ height: "400px", width: "20%", float: "right" }}
        >
          <NewsLetter
            firstTitle="Abonniere unseren Newsletter"
            subTitle="Erfahre als erster von neuen Produkten, Tipps und Ideen!"
          ></NewsLetter>
        </div>
      </container>
      {/* <FooterDesktop /> */}

      {/* <Link to="/home">
        <img
          style={{ width: "337.4px", height: "80px", marginTop: "180px" }}
          src={logo}
          alt=""
        />
      </Link> */}
    </div>
  );
};

const Images = [
  {
    url: BuyGoldDesktop1,

    text: "Unze Gold",
  },
  {
    url: BuyGoldDesktop2,
    text: "Unze Gold",
  },
  {
    url: BuyGoldDesktop3,
    text: "hello",
  },
  {
    url: BuyGoldDesktop4,
    text: "hello",
  },
];
export default Home;
