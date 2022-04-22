import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFF100',
    },
    secondary: {
      main: '#232C33',
    },
    background: {
      default: '#191F24',
      paper: '#232C33',
    },
    text: {
      primary: '#FFFFFF',
    },
    error: {
      main: '#DB3A34',
    },
  },
  typography: {
    h1: {
      fontFamily: '"Alfa Slab One", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
    },
    h2: {
      fontFamily: '"Alfa Slab One", "Helvetica", "Arial", sans-serif',
      letterSpacing: 1.5,
    },
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    body1: {
      fontWeight: 200,
    },
    h4: {
      fontFamily: '"Alfa Slab One", "Helvetica", "Arial", sans-serif',
    },
    h3: {
      fontFamily: '"Alfa Slab One", "Helvetica", "Arial", sans-serif',
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
    MuiTextFieldBase: {},
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 14,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
