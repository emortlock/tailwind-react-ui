import getBaseColor from './getBaseColor'

export default color => {
  if (!color) return false

  if (color === 'white') {
    return 'grey-lightest'
  }

  if (!color.includes('-')) {
    return `${color}-dark`
  }

  const baseColor = getBaseColor(color)

  switch (color.substr(color.indexOf('-') + 1)) {
    case 'darker':
      return `${baseColor}-darkest`
    case 'dark':
      return `${baseColor}-darker`
    case 'light':
      return baseColor
    case 'lighter':
      return `${baseColor}-light`
    case 'lightest':
      return `${baseColor}-lighter`
    default:
      return color
  }
}
