import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      gradient: string;
      avatar: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      gradient: string;
      avatar: string;
    };
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#666666',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
    custom: {
      gradient: 'linear-gradient(135deg, #e3f2fd, #f3e6f5)',
      avatar: '#bdbdbd',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#b0b0b0',
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
    custom: {
      gradient: 'linear-gradient(135deg, transparent, #49138b)',
      avatar: '#757575',
    },
  },
});
