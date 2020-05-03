const colors = {
  black: '#000000',
  white: '#ffffff',
  gray: '#a0aec0',
  lightGray: '#e2e8f0',
  teal: '#2c7a7b'
};

const sizes = {
  base: 8,
  padding: 16,
  margin: 24,
  title: 36,
  caption: 14,
  subHeader: 24
};

const fontWeights = {
  light: '200',
  regular: '500',
  bold: '700'
};

const radius = {
  full: 25,
  half: 10
};

const shadows = {
  base: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1,
    shadowRadius: 8.0,
    elevation: 1
  },
  md: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.3,
    shadowRadius: 6.27,
    elevation: 10
  }
};

export { colors, sizes, fontWeights, radius, shadows };
