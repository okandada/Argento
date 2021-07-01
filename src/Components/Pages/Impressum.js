import React, { Component } from "react";
import BgImageComponent from "../BackgroundimageComponent/backGroundImage";
import BackgroundImage from "../../Images/Home/Desktop/Fotos/Hero.png";
import Typography from "@material-ui/core/Typography";
import "./impressum.css";
export default class ImpressumPage extends Component {
  render() {
    return (
      <div>
        <BgImageComponent
          DashSize={"35%"}
          HeadingSize={"h2"}
          Heading="Impressum"
          imageHeight={"220px"}
        />

        <div>
          <Typography className="headerStyle">Argento Aurum</Typography>
          <Typography className="text-Styling">
            Hohenzollernring 48
            <br /> 50667 Köln
          </Typography>
        </div>
        <div>
          <Typography className="headerStyle">Kontakt</Typography>
          <Typography className="text-Styling">
            Telefon: +49 (0) 2175 - 37 3841 <br /> Telefon: +49 (0) 2175 - 37
            3841
            <br />
            Internet: www.argentoaurum.com <br />
            E-Mail: info@argentoaurum.com <br />
          </Typography>
          <Typography className="headerStyle">Kontakt</Typography>
          <Typography className="text-Styling">
            Sitz der Gesellschaft: Köln
            <br /> Registergericht: XXXXXXXX <br />
            Registernummer: XXXXXXX <br />
            Ust.-ID-Nr.: XXXXXXXXXXX
          </Typography>
        </div>
        {/* <Link to="/home">
          <img
            style={{ width: "337.4px", height: "80px", marginTop: "180px" }}
            src={logo}
            alt=""
          />
        </Link> */}
      </div>
    );
  }
}
