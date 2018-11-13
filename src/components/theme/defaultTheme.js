export default {
  prefix: '',
  radius: 'rounded',
  spacing: {
    zero: 0,
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
  container: {
    sm: 'xl',
    md: '3xl',
    lg: '4xl',
  },
  text: {
    size: {
      body: ['sm', 'base', 'lg'],
      title: ['lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    },
    family: {
      body: 'sans',
      subtitle: 'sans',
      title: 'sans',
    },
  },
  brandColors: {
    primary: 'blue',
    secondary: 'grey-dark',
    success: 'green',
    danger: 'red',
    warning: 'orange-light',
    info: 'blue-lighter',
  },
  textColors: {
    body: 'grey-darkest',
    link: 'blue-dark',
    linkDark: 'blue-darker',
    emphasis: 'black',
    on: {
      primary: 'white',
      secondary: 'white',
      success: 'white',
      danger: 'white',
      warning: 'black',
      info: 'black',
      dark: 'white',
    },
  },
  surfaceColors: {
    default: 'white',
    dark: 'grey-darker',
    light: 'grey-lightest',
  },
  highlightOffset: 1,
  accentSize: 4,
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
}
