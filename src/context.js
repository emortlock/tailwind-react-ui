import React from 'react'

export const defaultVars = {
  radius: 'rounded',
  spacing: {
    sm: 2,
    md: 4,
    lg: 8,
  },
  text: {
    size: {
      body: ['base', 'lg'],
      title: ['lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    },
    family: {
      body: 'sans',
      subtitle: 'sans',
      title: 'sans',
    },
  },
  baseColors: {
    primaryLight: 'blue-light',
    primary: 'blue',
    primaryDark: 'blue-dark',
    secondaryLight: 'grey',
    secondary: 'grey-dark',
    secondaryDark: 'grey-darker',
    successLight: 'green-light',
    success: 'green',
    successDark: 'green-dark',
    dangerLight: 'red-light',
    danger: 'red',
    dangerDark: 'red-dark',
    warningLight: 'orange-lighter',
    warning: 'orange-light',
    warningDark: 'orange',
    infoLight: 'teal-lighter',
    info: 'teal-light',
    infoDark: 'teal',
  },
  textColors: {
    body: 'grey-darker',
    link: 'blue-dark',
    linkDark: 'blue-darker',
    emphasis: 'black',
    on: {
      primaryLight: 'white',
      primary: 'white',
      primaryDark: 'white',
      secondaryLight: 'white',
      secondary: 'white',
      secondaryDark: 'white',
      successLight: 'white',
      success: 'white',
      successDark: 'white',
      dangerLight: 'white',
      danger: 'white',
      dangerDark: 'white',
      warningLight: 'black',
      warning: 'black',
      warningDark: 'black',
      infoLight: 'black',
      info: 'black',
      infoDark: 'black',
    },
  },
}

export const TailwindContext = React.createContext(defaultVars)
