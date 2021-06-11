import React, { Component } from "react";
import BgImageComponent from "../BackgroundimageComponent/backGroundImage";
import { cartBgImage } from "../ConditionalRendering/Rendering";
import { BrowserRouter as Link } from "react-router-dom";
import logo from "../../Images/ÜberUns/Desktop/Fotos/logo.png";

export default class ImpressumPage extends Component {
  render() {
    return (
      <div>
        <BgImageComponent bgImage={cartBgImage} />
        <div>
          <h3>Argento Aurum</h3>
          Hohenzollernring 48
          <br /> 50667 Köln
        </div>
        <div>
          <h3>Kontakt</h3>
          Telefon: +49 (0) 2175 - 37 3841 <br /> Telefon: +49 (0) 2175 - 37 3841
          <br />
          Internet: www.argentoaurum.com <br />
          E-Mail: info@argentoaurum.com <br />
          <h3>Kontakt</h3>
          Sitz der Gesellschaft: Köln
          <br /> Registergericht: XXXXXXXX <br />
          Registernummer: XXXXXXX <br />
          Ust.-ID-Nr.: XXXXXXXXXXX
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
