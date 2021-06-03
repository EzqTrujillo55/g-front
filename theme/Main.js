import { createMuiTheme } from '@material-ui/core';

export const main = createMuiTheme({
  palette: {
    primary: {
      main: '#4ECDC4'
    },
    secondary: {
      main: '#4ace83'
    }
  },
  typography: {
    fontFamily: 'Roboto'
  },
  shape: {
    borderRadius: 0
  },
  props: {
    MuiButton: {
      variant: 'contained',
      disableRipple: true,
      color: 'primary'
    },
    MuiTextField: {
      variant: 'outlined',
      InputLabelProps: {
        shrink: true
      }
    },
    MuiPaper: {
      elevation: 0
    }
  }
});
