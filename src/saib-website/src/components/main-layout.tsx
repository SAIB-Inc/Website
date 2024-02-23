import React, { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
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

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};;

export default MainLayout