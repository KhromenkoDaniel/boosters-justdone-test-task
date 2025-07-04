const fontFamily = 'Inter, sans-serif';

const baseText16 = {
  fontFamily,
  fontSize: '16px',
  lineHeight: '150%',
};

const baseButton14 = {
  fontFamily,
  fontSize: '14px',
  lineHeight: '143%',
  textAlign: 'center',
};

const customTypography = {
  placeholder: {
    ...baseText16,
    fontWeight: 600,
    letterSpacing: '0.01em',
  },

  buttonDisabled: {
    ...baseButton14,
    fontWeight: 600,
    letterSpacing: '0.01em',
  },

  buttonAction: {
    ...baseButton14,
    fontWeight: 600,
    letterSpacing: '0.01em',
  },

  buttonCard: {
    ...baseButton14,
    fontWeight: 500,
    letterSpacing: '0.02em',
  },

  errorText: {
    fontFamily,
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '133%',
  },
};

export default customTypography;
