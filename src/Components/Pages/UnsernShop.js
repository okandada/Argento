import React from "react";
import styled from "styled-components";
import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";
import { cartBgImage } from "../../Components/ConditionalRendering/Rendering";
import BuyGoldDesktop1 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop1.png";
import "./UnsernShop.css";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Container, makeStyles } from "@material-ui/core";
import logo from "../../Images/ÜberUns/Desktop/Fotos/logo.png";
import { BrowserRouter as Link } from "react-router-dom";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import MobileFooter from "../NavBarMobile/navBarMobile";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const heading = "1 Unze Gold ";
const text = "Feinheit: 999,9/1000 Feingold";
const text1 = "Herkunftsland: Schweiz / Deutschland";
const digitHeading = "1.560,41 EUR";

const useStyles = makeStyles({});
const defaultProps = {
  // m: 2,
  borderColor: "#ecbd46",
  border: "3px solid",
};

function UnsernShop() {
  return (
    <div>
      <div>
        <BgImageComponent bgImage={cartBgImage} />
      </div>

      <AboutCarddiv style={{ marginTop: "70px" }}>
        <Container style={{ paddingLeft: "12px" }} className="container">
          <img src={BuyGoldDesktop1} className="desktop UnsernImage" alt="" />
          <img src={BuyGoldDesktop1} width="100%" className="mobile" alt="" />
          <img src={BuyGoldDesktop1} width="100%" className="IpadPro" alt="" />
          <img src={BuyGoldDesktop1} width="100%" className="IpadQuer" alt="" />
        </Container>

        <Container style={{ marginLeft: "20px" }} className="container">
          <div className="UnzeGoldtextdiv">
            <h2 style={{ margin: "0px" }}>{heading}</h2>
            <h4 style={{ margin: "0px" }}> </h4>
            <p style={{ margin: "0px", color: "#a4a4a4" }}>
              Feinheit: 999,9/1000 Feingold
            </p>
            <p style={{ margin: "0px", color: "#a4a4a4" }}>
              Herkunftsland: Schweiz / Deutschland
            </p>
            <div textPrice>
              <h2 style={{ marginBottom: "0px" }}>1.560,41 EUR</h2>
              <p style={{ margin: "0px", color: "#a4a4a4" }}>
                zzgl. Versandkosten Lieferzeit: 4-7 Tage
              </p>
            </div>
          </div>
          <Button
            style={{
              background: "#000000",
              border: "2px solid white",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            fullWidth={true}
          >
            Menge
          </Button>
          <br />
          <Button
            style={{
              background: "white",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            fullWidth={true}
          >
            <span style={{ color: "#c28c02", fontWeight: "bolder" }}>
              In den Warenkorb
            </span>
          </Button>
        </Container>
      </AboutCarddiv>

      {/* <Typography variant="h2">{heading}</Typography>
              <Typography variant="h4">{text}</Typography>
              <Typography variant="h4">{text1}</Typography>
            </div>
            */}
      <div>
        <Button
          style={{ backgroundColor: "#ecbd46", width: "219px", height: "44px" }}
        >
          Beschreibung
        </Button>
        <Button
          style={{
            color: "#c28c02",
            backgroundColor: "#ffffff",
            width: "219px",
            height: "44px",
          }}
        >
          Eigenschaften
        </Button>
      </div>
      <Box style={{ height: "220px" }} border={1} {...defaultProps}>
        <p style={{ color: "#a4a4a4", float: "left", width: "50%" }}>
          Goldbarren und Goldmünzen gibt es in unterschiedlichen Größen. Doch
          welche Größe ist die richtige? Für jede Gewichtseinheit fallen
          unterschiedlich hohe Prägekosten an, die in den Verkaufspreis mit
          eingerechnet sind. Für kleine Goldbarren sowie –münzen werden
          prozentual höhere Aufschläge bezogen auf den reinen Materialwert
          berechnet, als für große….
        </p>
      </Box>
      <Link to="/home">
        <img
          style={{ width: "337.4px", height: "80px", marginTop: "180px" }}
          src={logo}
          alt=""
        />
      </Link>
      <MobileFooter />
    </div>

    // </div>
  );
}

export default UnsernShop;
const AboutCarddiv = styled.div`
  width: 100%;
  display: inline-flex;
  padding-top: 30px;

  @media (max-width: 375px) {
    display: block};
  .container {
    overflow: hidden;
    padding-left: 0px;
    padding-right: 0px;
}
  }
  .title {
    padding: 0px;
    margin-top: 0px;
  }

 
`;
