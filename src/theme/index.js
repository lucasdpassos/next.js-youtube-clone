import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3EA6FF',
    },    
    
    background: {
      default: colors.common.white,
      paper: colors.common.white,
      dark: '#f4f6f8'
    },
  },
});

export default theme;