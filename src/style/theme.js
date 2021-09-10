import { createTheme } from '@material-ui/core';
import shadows from '@material-ui/core/styles/shadows';

const theme = createTheme({
  palette: {
    primary: {
      light: '#e0e8ff',
      main: '#3829e0',
    },
    secondary: {
      light: '#f5f7ff',
      main: '#7280a7',
      dark: '#1f2f56',
    },
    text: {
      primary: '#1f2f56',
      secondary: '#7280a7',
      white: '#fff',
    },
  },
  typography: {
    fontFamily: "'Red Hat Display','sans-serif'",
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    fontWeightBold: 900,
    h3: { fontWeight: 700 },
    body1: {
      fontSize: '1.6rem',
    },
  },
  shadows: ['none', '0 30px 25px -15px rgba(56, 41, 224, 0.08)'],
});

export default theme;
