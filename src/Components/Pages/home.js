import React from "react";
import CardGrid from "../Cards/cardGrid";
import BuyGoldDesktop1 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop1.png";
import BuyGoldDesktop2 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop2.png";
import BuyGoldDesktop3 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop3.png";
import BuyGoldDesktop4 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop4.png";
import YellowStroke from "../../Images/ÜberUns/Desktop/SVG/YellowStroke.svg";
import NewsletterDesktop from "../../Images/Home/Desktop/Fotos/NewsletterDesktop.png";
import NewsletterMobile from "../../Images/Home/Smartphone/Fotos/NewsletterMobile.png";
import NewsletterIpad from "../../Images/Home/TabletHoch/Fotos/NewsletterIpad.png";
import NewsletterQuer from "../../Images/Home/TabletQuer/Fotos/NewsletterQuer.png";
import GOldCourseDesktop from "../../Images/Home/Desktop/Fotos/GOldCourseDesktop.png";
import GOldCourseMobile from "../../Images/Home/Smartphone/Fotos/GOldCourseMobile.png";
import GOldCourseIpad from "../../Images/Home/TabletHoch/Fotos/GOldCourseIpad.png";
import GOldCourseQuer from "../../Images/Home/TabletQuer/Fotos/GoldCourseQuer.png";
import AltCard from "../../Components/Cards/hilfenTipsCard";
import "./home.css";
import NewsLetter from "../Newsletter/NewsLetter";
import GoldPrice from "../GolgPrice/GoldPrice";
import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";
import { BgImage } from "../../Components/ConditionalRendering/Rendering";
import MediaCard from "../Cards/cards";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../Images/ÜberUns/Desktop/Fotos/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// const useStyles = makeStyles({
//   marginTop: "20px",
// });
// const defaultProps = {
//   m: 2,
//   borderColor: "#ecbd46",
//   border: "3px solid",
// };
export const Home = () => {
  // const classes = useStyles();
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
              firstTitle="Goldpreis in Silber"
              subTitle="je Feinunze (31,103g)"
              price="21,21 EUR"
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
      <h2>
        Hilfen & Tipps zum Edelmeatllaukf
        <div className="dash">
          <img src={YellowStroke} alt="" />
        </div>
      </h2>
      <AltCard />
      <h2>
        Newsletter
        <div className="dash">
          <img src={YellowStroke} alt="" />
        </div>
      </h2>
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
      <Link to="/home">
        <img
          style={{ width: "337.4px", height: "80px", marginTop: "180px" }}
          src={logo}
          alt=""
        />
      </Link>
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
