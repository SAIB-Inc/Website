import React, { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EBE8FF',
    },
    secondary: {
      light: '#E7E1FF',
      main: '#6F03E0',
    },
    text: {
      primary: '#3A376A',
      secondary: '#6F03E0',
    },
  },
  typography: {
    button: {
      fontFamily: ['Poppins', 'serif'].join(','),
      fontSize: 16,
      fontWeight: 400,
    },
  },
});

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  );
};;

export default MainLayout