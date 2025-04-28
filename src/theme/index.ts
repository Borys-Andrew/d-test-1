import { createTheme } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blue[500],
    },
    secondary: {
      main: grey[500],
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[300],
    },
    secondary: {
      main: grey[300],
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
  },
});
