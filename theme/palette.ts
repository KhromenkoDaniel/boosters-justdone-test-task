import { PaletteOptions } from '@mui/material/styles';

const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#3B5AAE', // _primary-40
    contrastText: '#FFFFFF', // M3/sys/light/on-primary
  },
  error: {
    main: 'rgb(255, 52, 42)', // Colors/Red
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#FFFFFF',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#000000',
    secondary: '#DBDCDF', // _neutral-60
    disabled: '#AEAFB1', // _neutral-40
  },
  grey: {
    50: '#EEF0F5', // _neutral-80
    100: '#DBDCDF', // _neutral-60
    200: '#AEAFB1', // _neutral-40
    300: '#76777A', // _neutral-30
  },
};

export default palette;
