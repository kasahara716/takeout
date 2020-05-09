import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"M PLUS Rounded 1c"',
      // 'Roboto',
      // 'Arial',
      // 'sans-serif',
      // '"Apple Color Emoji"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#6882A8',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
