import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8a4af3',
    },
  },
  overrides: {
    MuiTab: {
      root: {
        width: 'fit-content',
        textTransform: 'none',
        minWidth: '0 !important',
      },
    },
    MuiPaper: {
      root: {
        padding: '10px 20px',
      },
    },
    MuiButton: {
      text: {
        textTransform: 'none',
      },
      contained: {
        textTransform: 'none',
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: 'white',
          boxShadow: '0 0 3px 3px #f0a3ffaf',
        },
      },
    },
  },
});
export default theme;
