import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
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
  fontSize: "6vw",
  color: "#ffffff",
  fontFamily: "TGL0-1451Engschrift ",
};
theme.typography.h2 = {
  fontSize: "4.2vw",
  // fontSize: "4rem",
  fontWeight: "normal",
  padding: "43px 0",
  color: "#ffffff",
  "@media (max-width:600px)": {
    padding: "23px 0",
  },
  [theme.breakpoints.up("md")]: {
    padding: "43px 0",
  },
};
theme.typography.h3 = {
  fontSize: "2.3vw",
  color: "#ffffff",
};
// heading used for card heading and other same sizes
theme.typography.h4 = {
  fontSize: "1.5rem",
  fontWeight: "Normal",
  color: "#ffffff",
  fontFamily: "TGL0-1451Engschrift ",
  "@media (max-width:850px)": {
    fontSize: "1.3rem",
  },
  "@media (max-width:700px)": {
    fontSize: "1.2rem",
  },
  "@media (max-width:630px)": {
    fontSize: "1.1rem",
  },
  "@media (max-width:400px)": {
    fontSize: "1rem",
  },
};
theme.typography.h5 = {
  fontSize: "1.43vw",
  color: "#ffffff",
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
};
theme.typography.button = {
  fontSize: "1.25rem",
  color: "#ecbd46",
  fontFamily: "TGL0-1451Engschrift",
  "@media (max-width:660px)": {
    fontSize: "16px",
  },
};
export default theme;
