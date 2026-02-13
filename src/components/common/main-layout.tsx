import React, { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    brand: {
      navy: string;
      accent: string;
      decorative: string;
      lightText: string;
      softPurple: string;
      line: string;
      gradient: {
        iconStart: string;
        iconEnd: string;
        strategy: string;
      };
    };
  }

  interface PaletteOptions {
    brand?: {
      navy?: string;
      accent?: string;
      decorative?: string;
      lightText?: string;
      softPurple?: string;
      line?: string;
      gradient?: {
        iconStart?: string;
        iconEnd?: string;
        strategy?: string;
      };
    };
  }

  interface TypeBackground {
    dark?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#646FFF",
      dark: "#2E0F9F",
      light: "#AFAFE8",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#3517A2",
      dark: "#5F4AF3",
      light: "#BFC4FF",
    },
    text: {
      primary: "#140E34",
      secondary: "#161C2D",
      disabled: "#5F6155",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F8FAFB",
      dark: "#221658",
    },
    divider: "#F1F3F7",
    brand: {
      navy: "#221658",
      accent: "#4D4DFF",
      decorative: "#F4F6FA",
      lightText: "#F3F3FF",
      softPurple: "#E8E8FF",
      line: "#9D8FFD",
      gradient: {
        iconStart: "#C5BBEB",
        iconEnd: "#C0CDE3",
        strategy: "#C0D3FF",
      },
    },
  },
  typography: {
    fontFamily: ["Geologica", "sans-serif"].join(","),
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
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: "20px",
      fontWeight: 700,
    },
    body1: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.825,
    },
    body2: {
      fontSize: "15px",
      fontWeight: 500,
    },
    button: {
      fontSize: "14px",
      fontWeight: 700,
    },
  },
  shadows: [
    "none",
    "0px 3px 10px 0px rgba(148, 142, 189, 0.25)",
    "0px 6px 10px 3px rgba(148, 142, 189, 0.25)",
    "0px 6px 10px 0px rgba(148, 142, 189, 0.5)",
    "0px 6px 30px 0px rgba(148, 142, 189, 0.1)",
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
};

export default MainLayout;
