import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#dc004e',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

theme.overrides = {
  MuiTableSortLabel: {
    root: {
      '& $icon': {
        opacity: 0.3,
      },
      '&$active': {
        color: '#ffffff',
        '&& $icon': {
          opacity: 1,
          color: '#ffffff',
        },
      },
    },
    MuiPickersClock: {
      clock: {
        backgroundColor: 'red',
      },
    },
  },
};

export default theme;
