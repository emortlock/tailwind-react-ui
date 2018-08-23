export default color => {
  if (!color.includes('-')) {
    return color
  }

  return color.substr(0, color.indexOf('-'))
}
