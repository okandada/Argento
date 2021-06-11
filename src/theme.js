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
    fontFamily: "Barlow",
    body2: "Barlow",
    fontSize: "400px",
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 0,
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        color: "white",
      },
      fullWidth: {
        maxWidth: "435px",
      },
    },
  },
});
export default theme;
