export default <T extends unknown>(value?: T | T[]): T[] => {
  if (value === undefined) return []

  return Array.isArray(value) ? value : [value]
}
