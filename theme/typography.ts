import { TypographyVariantsOptions } from '@mui/material/styles';

const fontFamily = 'Inter, sans-serif';

const typography: TypographyVariantsOptions = {
  fontFamily,

  h1: {
    fontWeight: 700,
    fontSize: '44px',
    lineHeight: '136%',
    letterSpacing: '-0.01em',
    textAlign: 'center',
  },

  subtitle1: {
    fontWeight: 500,
    fontSize: '22px',
    lineHeight: '127%',
    textAlign: 'center',
  },

  body1: {
    fontFamily,
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '0.03em',
  },

  body2: {
    fontFamily,
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '143%',
  },
};

export default typography;
