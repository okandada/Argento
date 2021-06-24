import React from "react";
import "./AktueleAnkaufMob.css";
import GOldCourseDesktop from "../../Images/Home/Desktop/Fotos/GOldCourseDesktop.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));
export const AktueleAnkaufMob = (props) => {
  const classes = useStyles();
  return (
    <div className="text-items-mob">
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={GOldCourseDesktop} />
        <Typography variant="h4" gutterBottom>
          Goldpreis in EURO
        </Typography>
        {/* <typography>
          <h5
          // className="H5FontStyleMob"
          // style={{
          //   fontFamily: "TGL0-1451Engschrift",
          //   fontSize: "20px",
          //   textAlign: "left",
          //   marginBottom: "0px",
          // }}
          >
            Goldpreis in EURO
          </h5> */}
        <Typography variant="subtitle1" gutterBottom>
          je Feinunze (31,103g)
        </Typography>
        {/* <p
            style={{ color: "#a4a4a4", fontFamily: "Barlow", fontSize: "12px" }}
          >
            je Feinunze (31,103g)
          </p> */}
        <Typography variant="subtitle1" gutterBottom>
          1.449,68 EUR
        </Typography>
        {/* <p
            style={{
              width: "170px",
              height: "25px",
              marginTop: " 15px",
              //   padding: "4px 66px",
              backgroundColor: "#1c1c1c",
              color: "#ecbd46",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            1.449,68 EUR
          </p> */}
        <Typography variant="subtitle1" gutterBottom>
          -0,75 %
        </Typography>
        {/* <p style={{ alignItems: "left", fontSize: "12px", color: "#a4a4a4" }}>
            -0,75 %
          </p> */}
        <Typography variant="subtitle1" gutterBottom>
          0,00 EUR
        </Typography>
        {/* <p
            style={{ alignItems: "right", fontSize: "12px", color: "#a4a4a4" }}
          >
            0,00 EUR
          </p> */}
        <Typography variant="subtitle1" gutterBottom>
          Silberpreis in EURO
        </Typography>
        {/* <h5
            className="H5FontStyleMob"
            // style={{
            //   fontFamily: "TGL0-1451Engschrift",
            //   fontSize: "20px",
            //   textAlign: "left",
            //   marginBottom: "0px",
            // }}
          >
            Silberpreis in EURO
          </h5> */}
        <p style={{ color: "#a4a4a4", fontFamily: "Barlow", fontSize: "12px" }}>
          je Feinunze (31,103g)
        </p>
        <p
          style={{
            width: "170px",
            height: "25px",
            marginTop: " 15px",
            //   padding: "4px 66px",
            backgroundColor: "#1c1c1c",
            color: "#ecbd46",
            marginBottom: "0px",
            textAlign: "center",
          }}
        >
          21,21 EUR
        </p>
        <p style={{ alignItems: "left", fontSize: "12px", color: "#a4a4a4" }}>
          0,00 %
        </p>
        <p style={{ alignItems: "right", fontSize: "12px", color: "#a4a4a4" }}>
          0,00 EUR
        </p>
        {/* </typography> */}
      </Card>
    </div>
  );
};
export default AktueleAnkaufMob;
