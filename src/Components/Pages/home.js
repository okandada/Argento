import React, { useEffect } from "react";
import { Heading_2 as Heading2 } from "../Pages/heading_2";
import CardGrid from "../Cards/cardGrid";
import BuyGoldDesktop1 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop1.jpg";
import BuyGoldDesktop2 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop2.jpg";
import BuyGoldDesktop3 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop3.jpg";
import BuyGoldDesktop4 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop4.jpg";
import NewsletterDesktop from "../../Images/Home/Fotos/NewsletterDesktop_new.jpg";
import GOldCourseDesktop from "../../Images/Home/Desktop/Fotos/GOldCourseDesktop.jpg";
import HilfenTipsCard from "../../Components/Cards/hilfenTipsCard";
import "./home.css";
import NewsLetter from "../Newsletter/NewsLetter";
import AktueleAnkauf from "../AktuelleAnkaufkurse/AktueleAnkauf";
import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";

export const Home = (props) => {
  useEffect(() => {
    props.setbackgroundcss("HomebackgroundGradiant");
  });
  return (
    <div>
      <div>
        <BgImageComponent
          SubHeading={"Die beste Währung in Krisenzeiten"}
          DashSize={"35%"}
          Heading="Gold & Silber"
        />
      </div>

      <Heading2 size="h2" Text=" Gold & Silber Kaufen"></Heading2>

      <CardGrid images={Images} />

      <Heading2 size="h2" Text="Aktuelle Ankaufkurse"></Heading2>

      <div className="container-text">
        <img
          src={GOldCourseDesktop}
          style={{ maxHeight: "460px", width: "100%" }}
          alt=""
          className="imagShadow"
        />
        <div className="text-price">
          <AktueleAnkauf
            firsttitle="Goldpreis in Euro"
            subtitle="je Feinunze(31,103g)"
            price="1.449.68 EUR"
            price_subtitle_left="-0.75%"
            price_subtitle_right="-10.28 Euro"
          ></AktueleAnkauf>
          <AktueleAnkauf
            firsttitle="Goldpreis in Silber"
            subtitle="je Feinunze (31,103g)"
            price="21,21 EUR"
            price_subtitle_left="-0.75%"
            price_subtitle_right="-10.28 Euro"
          ></AktueleAnkauf>
        </div>
      </div>

      <Heading2 size="h2" Text=" Hilfen & Tipps zum Edelmeatllaukf"></Heading2>

      <HilfenTipsCard />

      <Heading2 size="h2" Text=" Newsletter"></Heading2>

      <div className="container-text">
        <img
          src={NewsletterDesktop}
          style={{ maxHeight: "460px", width: "100%" }}
          alt=""
          className="imagShadow"
        />
        <div className="text-price">
          <NewsLetter
            firsttitle="Abonniere unseren Newsletter"
            subtitle="Erfahre als erster von neuen Produkten, Tipps und Ideen!"
          ></NewsLetter>
        </div>
      </div>
    </div>
  );
};

const Images = [
  {
    url: BuyGoldDesktop1,
    productlink: " https://argento-gold-store.myshopify.com/products/gold-2",
    text: "Unze Gold",
  },
  {
    url: BuyGoldDesktop2,
    productlink:
      "https://argento-gold-store.myshopify.com/products/white-gold-3",
    text: "Unze Gold",
  },
  {
    url: BuyGoldDesktop3,
    productlink: "https://argento-gold-store.myshopify.com/products/gold-1",
    text: "hello",
  },
  {
    url: BuyGoldDesktop4,
    productlink: "https://argento-gold-store.myshopify.com/products/silver",
    text: "hello",
  },
];
export default Home;
