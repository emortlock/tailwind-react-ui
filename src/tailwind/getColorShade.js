const shades = [
  'lightest',
  'lighter',
  'light',
  'base',
  'dark',
  'darker',
  'darkest',
]

export default (color, offset = 1) => {
  if (!color) {
    return false
  }
  if (offset === 0) return color

  let currentColor = color === 'white' ? ['grey', 'lightest'] : color.split('-')
  let shadeOffset = offset

  if (color === 'white') {
    if (shadeOffset < 1) return color
    if (shadeOffset === 1) return 'grey-lightest'

    currentColor = ['grey', 'lightest']
    if (typeof shadeOffset === 'number') shadeOffset = offset - 1
  }

  if (currentColor.length === 1) {
    currentColor.push('base')
  }

  if (typeof shadeOffset === 'string') {
    return `${currentColor[0]}-${shadeOffset}`
  }

  const shadeIndex = Math.min(
    Math.max(shades.indexOf(currentColor[1]) + shadeOffset, 0),
    shades.length - 1,
  )
  const newShade = shades[shadeIndex]

  return `${currentColor[0]}${newShade === 'base' ? '' : `-${newShade}`}`
}
