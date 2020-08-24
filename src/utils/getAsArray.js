export default value => {
  if (!value) return []

  return Array.isArray(value) ? value : [value]
}
