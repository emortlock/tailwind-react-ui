/* eslint-disable react/destructuring-assignment */
export const propDetails = {
  bg: {},
  text: {},
  font: {},
  border: {
    allowBool: true,
  },
  shadow: {
    allowBool: true,
  },
  rounded: {
    allowBool: true,
  },
  p: { allowNumber: true },
  m: { allowNumber: true },
  nm: { allowNumber: true },
  h: { allowNumber: true },
}

export const variants = ['hover']

export default [
  ...Object.keys(propDetails),
  ...variants.reduce(
    (variantProps, variant) => [
      ...variantProps,
      ...Object.keys(propDetails).map(prop => `${prop}-${variant}`),
    ],
    [],
  ),
]
