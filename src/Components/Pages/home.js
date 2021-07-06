import React from "react";
import { Heading } from "../Pages/heading";
import { Heading_2 } from "../Pages/heading_2";
import CardGrid from "../Cards/cardGrid";
import BuyGoldDesktop1 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop1.jpg";
import BuyGoldDesktop2 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop2.jpg";
import BuyGoldDesktop3 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop3.jpg";
import BuyGoldDesktop4 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop4.jpg";
import NewsletterDesktop from "../../Images/Home/Desktop/Fotos/NewsletterDesktop.jpg";
import GOldCourseDesktop from "../../Images/Home/Desktop/Fotos/GOldCourseDesktop.jpg";
import HilfenTipsCard from "../../Components/Cards/hilfenTipsCard";
import "./home.css";
import NewsLetter from "../Newsletter/NewsLetter";
import AktueleAnkauf from "../AktuelleAnkaufkurse/AktueleAnkauf";
import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";

export const Home = () => {
  return (
    <div>
      <BgImageComponent
        SubHeading={"Die beste Währung in Krisenzeiten"}
        DashSize={"35%"}
        Heading="Gold & Silber"
      />
      {/* <Heading size="h2" Text=" Gold & Silber Kaufen"></Heading> */}
      <Heading_2 size="h2" Text=" Gold & Silber Kaufen"></Heading_2>

      <CardGrid images={Images} />

      {/* <Heading size="h2" Text=" Aktuelle Ankaufkurse"></Heading> */}
      <Heading_2 size="h2" Text=" Aktuelle Ankaufkurse"></Heading_2>

      {/* <Container> */}
      <div className="container-text">
        <img
          src={GOldCourseDesktop}
          style={{ maxHeight: "460px", width: "100%" }}
          alt=""
        />
        <div className="text-price">
          <AktueleAnkauf
            firstTitle="Goldpreis in Euro"
            subTitle="je Feinunze(31,103g)"
            price="1.449.68 EUR"
            price_subtitle_left="-0.75%"
            price_subtitle_right="-10.28 Euro"
          ></AktueleAnkauf>
          <AktueleAnkauf
            firstTitle="Goldpreis in Silber"
            subTitle="je Feinunze (31,103g)"
            price="21,21 EUR"
            price_subtitle_left="-0.75%"
            price_subtitle_right="-10.28 Euro"
          ></AktueleAnkauf>
        </div>
      </div>
      {/* </Container> */}
      {/* <OutlinedCard /> */}
      {/* <Heading size="h2" Text=" Hilfen & Tipps zum Edelmeatllaukf"></Heading> */}
      <Heading_2
        size="h2"
        Text=" Hilfen & Tipps zum Edelmeatllaukf"
      ></Heading_2>

      <HilfenTipsCard />
      {/* <Heading size="h2" Text=" Newsletter"></Heading> */}
      <Heading_2 size="h2" Text=" Newsletter"></Heading_2>
      {/* <div className="mobile">
      <NewsLetterMob />
      </div> */}
      {/* <Container> */}
      <div className="container-text">
        <img
          src={NewsletterDesktop}
          style={{ maxHeight: "460px", width: "100%" }}
          alt=""
        />
        <div className="text-price">
          <NewsLetter
            firstTitle="Abonniere unseren Newsletter"
            subTitle="Erfahre als erster von neuen Produkten, Tipps und Ideen!"
          ></NewsLetter>
        </div>
      </div>
      {/* </Container> */}
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
