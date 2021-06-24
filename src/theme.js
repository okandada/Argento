import { createMuiTheme } from "@material-ui/core/styles";

import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "TGL0-1451Engschrift",
    // body2: "Barlow",
    // fontSize: "12px",
    htmlFontSize: 10,
    subtitle1: {
      fontSize: 12,
    },
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 0,
  // overrides: {
  //   MuiButton: {
  //     root: {
  //       textTransform: "none",
  //       color: "red",
  //       fontStyle: "italic",
  //     },
  //     fullWidth: {
  //       // maxWidth: "435px",
  //       backgroundColor: "#ffff",
  //       color: "#c28c02",
  //       // fontWeight: "bolder",
  //     },
  //   },
  // },
});
theme.typography.body1 = {
  // fontSize: "1.2vw",
  fontSize: "1.1rem",
  color: "#a4a4a4",
  fontFamily: "Barlow",
};
theme.typography.h1 = {
  fontSize: "7vw",
};
theme.typography.h2 = {
  fontSize: "4.2vw",
  // fontSize: "4rem",
  fontWeight: "normal",
  padding: "43px 0",
  "@media (max-width:600px)": {
    padding: "23px 0",
  },
  [theme.breakpoints.up("md")]: {
    padding: "43px 0",
  },
};
theme.typography.h3 = {
  fontSize: "2.3vw",
};
// heading with color 40px
theme.typography.h4 = {
  // fontSize: "1.6vw",
  fontSize: "1.5rem",
  // color: "#ecbd46",
  fontWeight: "Normal",
  fontFamily: "TGL0-1451Engschrift;",
  "@media (max-width:660px)": {
    fontSize: "1.2rem",
  },
};
theme.typography.h5 = {
  fontSize: "1.43vw",
};
theme.typography.h6 = {
  fontSize: "1.627rem",
  color: "#ecbd46",
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

theme.typography.body2 = {
  // fontSize: "2vw",
  fontSize: "1.8rem",
  color: "#ecbd46",
  "@media (max-width:600px)": {
    fontSize: "1.4rem",
  },
};
theme.typography.subtitle2 = {
  fontSize: "1.62vw",
  // fontSize: "	1.5625rem",
  fontFamily: "Barlow",
  // "@media (max-width:600px)": {
  //   fontSize: "0.7rem",
  // },
  // [theme.breakpoints.up("md")]: {
  //   fontSize: "1.4rem",
  // },
};
theme.typography.button = {
  fontSize: "1.25rem",
  color: "#ecbd46",
  "@media (max-width:660px)": {
    fontSize: "16px",
  },
};
export default theme;
