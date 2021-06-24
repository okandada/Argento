import React, { Component } from "react";
import BgImageComponent from "../BackgroundimageComponent/backGroundImage";
import { cartBgImage } from "../ConditionalRendering/Rendering";
import Typography from "@material-ui/core/Typography";

export default class ImpressumPage extends Component {
  render() {
    return (
      <div>
        <BgImageComponent bgImage={cartBgImage} />
        <div>
          <Typography variant="h4">Argento Aurum</Typography>
          <Typography variant="body2">
            Hohenzollernring 48
            <br /> 50667 Köln
          </Typography>
        </div>
        <div>
          <Typography variant="h4">Kontakt</Typography>
          <Typography variant="h5">
            Telefon: +49 (0) 2175 - 37 3841 <br /> Telefon: +49 (0) 2175 - 37
            3841
            <br />
            Internet: www.argentoaurum.com <br />
            E-Mail: info@argentoaurum.com <br />
          </Typography>
          <Typography variant="h4">Kontakt</Typography>
          <Typography variant="h5">
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
