import React, { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
        main: '#4F37EA'
        },
        secondary: {
        main: '#D714E8'
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