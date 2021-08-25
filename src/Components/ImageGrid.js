import React from "react";
import Grid from "@material-ui/core/Grid";
import Partner_1 from "../Images/Home/Desktop/Fotos/Partner_1.jpg";
import Partner_2 from "../Images/Home/Desktop/Fotos/Partner_2.jpg";
import Partner_3 from "../Images/Home/Desktop/Fotos/Partner_3.jpg";
import Partner_4 from "../Images/Home/Desktop/Fotos/Partner_4.jpg";
import "../App.css";
export default function ImageGrid() {
  return (
    <Grid container spacing={0}>
      <Grid
        container
        justifyContent="center"
        style={{ paddingTop: "15px" }}
        spacing={2}
      >
        <Grid item lg={3} md={6} sm={6} xs={6} className="imagShadow">
          <div>
            <img
              src={Partner_1}
              alt=""
              // className="imagShadow"
              height="100%"
              width="100%"
            />
          </div>
        </Grid>

        <Grid item lg={3} md={6} sm={6} xs={6}>
          <div>
            <img
              src={Partner_2}
              height="100%"
              width="100%"
              alt=""
              // className="imagShadow"
            />
          </div>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={6}>
          <div>
            <img
              src={Partner_3}
              height="100%"
              width="100%"
              alt=""
              // className="imagShadow"
            />
          </div>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={6}>
          <div>
            <img
              src={Partner_4}
              height="100%"
              width="100%"
              alt=""
              // className="imagShadow"
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
