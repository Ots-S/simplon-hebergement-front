import { createMuiTheme } from '@material-ui/core';
import { white } from '@material-ui/core/colors';

const theme = createMuiTheme({});

theme.overrides = {
  MuiTableSortLabel: {
    root: {
      '& $icon': {
        opacity: 0.3,
      },
      '&$active': {
        color: '#ffffff',

        // && instead of & is a workaround for https://github.com/cssinjs/jss/issues/1045
        '&& $icon': {
          opacity: 1,
          color: '#ffffff',
        },
      },
    },
  },
};

export default theme;
