/* eslint-disable react/destructuring-assignment */
/* TODO:
 *   .truncate
 *   .inline-flex
 *   style & decoration
 *   shape option for rounded?
 *   min/max support for height/width
 */
export const propDetails = {
  align: {},
  bg: {},
  border: { allowBool: true },
  break: {},
  content: {},
  flex: { allowBool: true },
  font: {},
  h: { allowNumber: true },
  items: {},
  justify: {},
  leading: {},
  m: { allowNumber: true, spacing: true },
  nm: { allowNumber: true, spacing: true },
  opacity: { allowNumber: true },
  p: { allowNumber: true, spacing: true },
  resize: { allowBool: true },
  rounded: { allowBool: true },
  select: {},
  self: {},
  shadow: { allowBool: true },
  text: {},
  tracking: {},
  w: { allowNumber: true },
  whitespace: {},
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
