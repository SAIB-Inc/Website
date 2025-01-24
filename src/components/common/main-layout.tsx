import React, { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    gradient: {
      main: string;
      dark: string;
    },
    carouselButtons: {
      active: string;
      inactive: string;
    }
    button: {
      default: string;
      hover: string;
      clicked: string;
      disabled: string;
    }
  }
  interface PaletteOptions {
    gradient?: {
      main?: string;
      dark?: string;
    },
    carouselButtons?: {
      active?: string;
      inactive?: string;
    },
    button: {
      default: string;
      hover: string;
      clicked: string;
      disabled: string;
    }
  }
}

const theme = createTheme({
  palette: {
    background: {
      default: "#F9F7FFE5"
    },
    primary: {
      light: "#EBE8FD",
      main: "#EBE8FF",
    },
    secondary: {
      light: "#E7E1FF",
      main: "#6F03E0",
      dark: "#7660E3"
    },
    gradient: {
      main: "#F3F1FF",
      dark: "#E4E1FA"
    },
    carouselButtons: {
      active: "#6F03E0",
      inactive: "#C8C0FD"
    },
    text: {
      primary: "#3A376A",
      secondary: "#6F03E0",
    },
    button: {
      default: "#6F03E0",
      hover: "#9026FF",
      clicked: "#5438DC",
      disabled: "#CAC7DF"
    }
  },
  typography: {
    fontFamily: ["Poppins", "serif"].join(","),
    h1: {
      fontSize: "72px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "72px",
      fontWeight: 500,
    },
    h3: {
      fontSize: "48px",
      fontWeight: 700,
    },
    h4: {
      fontSize: "36px",
      fontWeight: 700,
    },
    h5: {
      fontSize: "28px",
      fontWeight: 700,
    },
    h6: {
      fontSize: "16px",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "56px",
      fontWeight: 700
    },
    subtitle2: {
      fontSize: "20px",
      fontWeight: 700
    },
    body1: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.825,
    },
    body2: {
      fontSize: "15px",
      fontWeight: 500
    },
    button: {
      fontSize: "14px",
      fontWeight: 700
    }
  },
  shadows: [
    "none",
    "0px 3px 10px 0px rgba(148, 142, 189, 0.25)",
    "0px 6px 10px 3px rgba(148, 142, 189, 0.25)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
  ],
});

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};;

export default MainLayout