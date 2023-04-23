import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    FormLabel: {
      baseStyle: {
        fontSize: "14px",
      },
    },
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "14px",
    slg: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  colors: {
    maybank: {
      50: "#FFF6D1",
      100: "#FFE191",
      200: "#FFE87F",
      300: "#FFEF6E",
      400: "#FFF55C",
      500: "#FFC600",
      600: "#D69E00",
      700: "#AD7700",
      800: "#844F00",
      900: "#5B2700",
    },
  },
});

export default theme;
