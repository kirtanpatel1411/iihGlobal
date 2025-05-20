import { createTheme } from "@mui/material/styles";
import { MuiButton } from "./ThemeComponent";
import { MuiTypography } from "./ThemeComponent";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9500",
      light: "#FFF1DC",
    },
    background: {
      default: "#F7F7F8",
      main: "#FFF",
    },

    fontcolor: {
      main: "#262626",
      light: "#59595A",
      dark: "#191919",
    },
  },
  components: {
    MuiButton,
    MuiTypography,
  },

  breakpoints: {
    xs: 375,
    ssm: 541,
    sm: 769,
    md: 931,
    lg: 1240,
    xl: 1440,
    xxl: 1536,
  },
});

export default theme;
