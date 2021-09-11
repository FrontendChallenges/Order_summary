import { createTheme } from '@material-ui/core';

const theme = createTheme({
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        width: '100%',
      },
    },
    MuiCard: {
      root: {
        borderRadius: '1.5rem',
      },
    },
  },
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
    fontSize: 16,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    fontWeightBold: 900,
    h3: { fontWeight: 900, fontSize: '2.8rem' },
    body1: {
      fontSize: '1.6rem',
    },
    button: {
      fontSize: '1.6rem',
    },
  },
  shadows: ['none', '0 30px 25px -15px rgba(56, 41, 224, 0.08)'],
});

export default theme;
