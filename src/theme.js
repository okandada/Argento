import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "TGL0-1451Engschrift",
    htmlFontSize: 10,
    subtitle1: {
      fontSize: 12,
    },
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 0,
});
theme.typography.body1 = {
  // fontSize: "1.2vw",
  fontSize: "1.1rem",
  color: "#ffffff",
  fontFamily: "Barlow",
};
theme.typography.h1 = {
  fontSize: "8.7vw",
  // fontSize: "8.4rem",
  color: "#ffffff",
  fontFamily: "TGL0-1451Engschrift ",
  // "@media (max-width:600px)": {
  //   fontSize: "10.5vw",
  // },

  // fontFamily: "TGL0-1451Engschrift ",
  // "@media (max-width:600px)": {
  //   fontSize: "3.75rem",
};
theme.typography.h2 = {
  fontSize: "5vw",

  fontWeight: "normal",
  padding: "43px 0",
  color: "#ffffff",
  "@media (max-width:800px)": {
    padding: "23px 0",
    fontSize: "4.7vw",
  },
  "@media (max-width:600px)": {
    padding: "23px 0",
    fontSize: "2.2rem",
  },
  "@media (max-width:530px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    padding: "43px 0",
  },
};
// used in the navbarmenu button text
theme.typography.h3 = {
  fontSize: "1.8rem",
  color: "#ffffff",
  fontFamily: "Barlow",
  fontWeight: "500",
  fontStyle: "normal",
  objectFit: "contain",
  "@media (max-width:1025px)": {
    fontSize: "1.56rem",
  },
  "@media (max-width:750px)": {
    fontSize: "1.3rem",
  },
  "@media (max-width:630px)": {
    fontSize: "1.2rem",
  },
  "@media (max-width:400px)": {
    fontSize: "1.1rem",
  },
};
// heading used for card heading and other same sizes
theme.typography.h4 = {
  fontSize: "2rem",
  fontWeight: "Normal",
  color: "#ffffff",
  fontFamily: "TGL0-1451Engschrift",
  "@media (max-width:850px)": {
    fontSize: "1.9rem",
  },
  "@media (max-width:700px)": {
    fontSize: "1.8rem",
  },
  // "@media (max-width:630px)": {
  //   fontSize: "1.2rem",
  // },
  "@media (max-width:400px)": {
    fontSize: "1rem",
  },
};
theme.typography.h5 = {
  fontSize: "4vw",
  color: "#ffffff",
  fontFamily: "TGL0-1451Engschrift",
  "@media (max-width:600px)": {
    fontSize: "6vw",
  },
};
theme.typography.h6 = {
  fontSize: "1.627rem",
  color: "#ecbd46",
};

theme.typography.body2 = {
  // fontSize: "2vw",
  fontSize: "1.8rem",
  color: "#ecbd46",
  "@media (max-width:600px)": {
    fontSize: "1.4rem",
  },
};
theme.typography.subtitle1 = {
  // fontSize: "0.82vw",
  fontSize: "0.8rem",
  fontFamily: "Barlow",
  padding: "3px 0",
  color: "rgb(164, 164, 164)",
  "@media (max-width:600px)": {
    fontSize: "0.6rem",
  },
};
theme.typography.subtitle2 = {
  fontSize: "2.75vw",
  fontFamily: "Barlow",
  color: "#ffffff",
  fontWeight: "normal",
  "@media (max-width:660px)": {
    fontSize: "3vw",
  },
};

theme.typography.button = {
  fontSize: "1.25rem",
  color: "#ecbd46",
  fontFamily: "TGL0-1451Engschrift",
  "@media (max-width:660px)": {
    fontSize: "25px",
    fontWeight: "500",
  },
  "@media (max-width:340px)": {
    fontSize: "19px",
    fontWeight: "500",
  },
};
theme.typography.caption = {
  fontSize: "60px",
  color: "#ffffff",
  fontFamily: "TGL0-1451Engschrift",
  "@media (max-width:1366px)": {
    fontSize: "2.5rem",
  },
  "@media (max-width:1024px)": {
    fontSize: "2.3rem",
  },
  "@media (max-width:660px)": {
    fontSize: "2rem",
  },
};
export default theme;
