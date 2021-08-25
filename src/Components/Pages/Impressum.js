// import React, { Component } from "react";
import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import "./impressum.css";
import BgImageComponent2 from "../BackgroundimageComponent/backgroundImage_2";

export const ImpressumPage = (props) => {
  useEffect(() => {
    props.setbackgroundcss("ImpressumbackgroundGradiant");
  });

  return (
    <div>
      <BgImageComponent2
        DashSize={"35%"}
        HeadingSize={"h5"}
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
          Telefon: +49 (0) 2175 - 37 3841 <br /> Telefon: +49 (0) 2175 - 37 3841
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
    </div>
  );
};
export default ImpressumPage;
