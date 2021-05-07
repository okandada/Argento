import React from "react";
import Grid from "@material-ui/core/Grid";
import UnsernePartner1Desktop from "../../src/Images/ÜberUns/Desktop/Fotos/UnsernePartner1Desktop.png";
import UnsernePartner1Mobile from "../../src/Images/ÜberUns/Smartphone/Fotos/UnsernePartner1Mobile.png";
import UnsernePartner1Tablet from "../../src/Images/ÜberUns/TabletQuer/Fotos/UnsernePartnerQuer1.png";
import UnsernePartner2Desktop from "../../src/Images/ÜberUns/Desktop/Fotos/UnsernePartner2Desktop.png";
import UnsernePartner2Mobile from "../../src/Images/ÜberUns/Smartphone/Fotos/UnsernePartner2Mobile.png";
import UnsernePartner2Tablet from "../../src/Images/ÜberUns/TabletQuer/Fotos/UnsernePartnerQuer2.png";
import UnsernePartner3Desktop from "../../src/Images/ÜberUns/Desktop/Fotos/UnsernePartner3Desktop.png";
import UnsernePartner3Mobile from "../../src/Images/ÜberUns/Smartphone/Fotos/UnsernePartner3Mobile.png";
import UnsernePartner3Tablet from "../../src/Images/ÜberUns/TabletQuer/Fotos/UnsernePartnerQuer3.png";
import UnsernePartner4Desktop from "../../src/Images/ÜberUns/Desktop/Fotos/UnsernePartner4Desktop.png";
import UnsernePartner4Mobile from "../../src/Images/ÜberUns/Smartphone/Fotos/UnsernePartner4Mobile.png";
import UnsernePartner4Tablet from "../../src/Images/ÜberUns/TabletQuer/Fotos/UnsernePartnerQuer4.png";

export default function ImageGrid() {
  return (
    <Grid container spacing={0}>
      <Grid container justify="center" style={{ padding: "15px" }} spacing={0}>
        <Grid item lg={3} md={6} sm={12}>
          <div>
            <img
              src={UnsernePartner1Desktop}
              alt=""
              className="desktop"
              height="100%"
              width="100%"
            />
            <img
              src={UnsernePartner1Mobile}
              height="100%"
              width="100%"
              alt=""
              className="mobile"
            />
            <img
              src={UnsernePartner1Tablet}
              height="100%"
              width="100%"
              alt=""
              className="IpadPro"
            />
            {/* <img src={UnsernePartnerQuer1} height="200px" alt="" /> */}
          </div>
        </Grid>

        <Grid item lg={3} md={6} sm={12}>
          <div>
            <img
              src={UnsernePartner2Desktop}
              height="100%"
              width="100%"
              alt=""
              className="desktop"
            />
            <img
              src={UnsernePartner2Mobile}
              height="100%"
              width="100%"
              alt=""
              className="mobile"
            />
            <img
              src={UnsernePartner2Tablet}
              height="100%"
              width="100%"
              alt=""
              className="IpadPro"
            />
            {/* <img src={UnsernePartnerQuer1} height="200px" alt="" /> */}
          </div>
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <div>
            <img
              src={UnsernePartner3Desktop}
              height="100%"
              width="100%"
              alt=""
              className="desktop"
            />
            <img
              src={UnsernePartner3Mobile}
              height="100%"
              width="100%"
              alt=""
              className="mobile"
            />
            <img
              src={UnsernePartner3Tablet}
              height="100%"
              width="100%"
              alt=""
              className="IpadPro"
            />
            {/* <img src={UnsernePartnerQuer1} height="200px" alt="" /> */}
          </div>
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <div>
            <img
              src={UnsernePartner4Desktop}
              height="100%"
              width="100%"
              alt=""
              className="desktop"
            />
            <img
              src={UnsernePartner4Mobile}
              height="100%"
              width="100%"
              alt=""
              className="mobile"
            />
            <img
              src={UnsernePartner4Tablet}
              height="100%"
              width="100%"
              alt=""
              className="IpadPro"
            />
            {/* <img src={UnsernePartnerQuer1} height="200px" alt="" /> */}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
