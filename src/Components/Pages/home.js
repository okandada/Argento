import React from "react";
import CardGrid from "../Cards/cardGrid";
import BuyGoldDesktop1 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop1.png";
import BuyGoldDesktop2 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop2.png";
import BuyGoldDesktop3 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop3.png";
import BuyGoldDesktop4 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop4.png";
import YellowStroke from "../../Images/ÜberUns/Desktop/SVG/YellowStroke.svg";
import NewsletterDesktop from "../../Images/Home/Desktop/Fotos/NewsletterDesktop.png";
import NewsletterMobile from "../../Images/Home/Smartphone/Fotos/NewsletterMobile.png";
import NewsletterIpad from "../../Images/Home/Tablet Hoch/Fotos/NewsletterIpad.png";
import NewsletterQuer from "../../Images/Home/Tablet Quer/Fotos/NewsletterQuer.png";
import GOldCourseDesktop from "../../Images/Home/Desktop/Fotos/GOldCourseDesktop.png";
import GOldCourseMobile from "../../Images/Home/Smartphone/Fotos/GOldCourseMobile.png";
import GOldCourseIpad from "../../Images/Home/Tablet Hoch/Fotos/GOldCourseIpad.png";
import GOldCourseQuer from "../../Images/Home/Tablet Quer/Fotos/GoldCourseQuer.png";
import AltCard from "../../Components/Cards/hilfenTipsCard";
import "./home.css";
import NewsLetter from "../Newsletter/NewsLetter";
import GoldPrice from "../GolgPrice/GoldPrice";
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
      </h1>
      <container>
        <div className="container-text">
          <img
            src={GOldCourseDesktop}
            className="desktop"
            height="100%"
            width="100%"
            alt=""
          />
          <div className="text-price">
            <GoldPrice
              firstTitle="Goldpreis in Euro"
              subTitle="je Feinunze(31,103g)"
              price="1.449.68 EUR"
              price_subtitle_left="-0.75%"
              price_subtitle_right="-10.28 Euro"
            ></GoldPrice>
            <GoldPrice
              firstTitle="Goldpreis in Euro"
              subTitle="je Feinunze(31,103g)"
              price="1.449.68 EUR"
              price_subtitle_left="-0.75%"
              price_subtitle_right="-10.28 Euro"
            ></GoldPrice>
          </div>
        </div>
        <div>
          <img
            src={GOldCourseMobile}
            className="mobile"
            height="100%"
            width="100%"
            alt=""
          />
        </div>
        <div>
          <img
            src={GOldCourseIpad}
            className="IpadPro"
            height="100%"
            width="100%"
            alt=""
          />
        </div>
        <div>
          <img
            src={GOldCourseQuer}
            className="IpadQuer"
            height="100%"
            width="100%"
            alt=""
          />
        </div>
      </container>

      {/* <OutlinedCard /> */}
      <h1>
        Hilfen & Tipps zum Edelmeatllaukf
        <div className="dash">
          <img src={YellowStroke} alt="" />
        </div>
      </h1>
      <AltCard />
      <h1>
        Newsletter
        <div className="dash">
          <img src={YellowStroke} alt="" />
        </div>
      </h1>
      <container>
        <div className="container-text">
          <img
            src={NewsletterDesktop}
            className="desktop"
            height="100%"
            width="100%"
            alt=""
          />
          <div className="text-price">
            <NewsLetter
              firstTitle="Abonniere unseren Newsletter"
              subTitle="Erfahre als erster von neuen Produkten, Tipps und Ideen!"
            ></NewsLetter>
          </div>
        </div>
        <div>
          <img
            src={NewsletterMobile}
            className="mobile"
            height="100%"
            width="100%"
            alt=""
          />
        </div>
        <div>
          <img
            src={NewsletterIpad}
            className="IpadPro"
            height="100%"
            width="100%"
            alt=""
          />
        </div>
        <div>
          <img
            src={NewsletterQuer}
            className="IpadQuer"
            height="100%"
            width="100%"
            alt=""
          />
        </div>
      </container>
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
