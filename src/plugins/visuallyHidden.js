module.exports = ({ variants = ['responsive'] } = {}) => ({ addUtilities }) => {
  addUtilities(
    {
      '.visually-hidden, .visually-hidden-focusable': {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: '1px',
        whiteSpace: 'nowrap',
      },
      '.visually-hidden-focusable': {
        '&:active, &:focus, &:focus-within': {
          clip: 'auto',
          height: 'auto',
          margin: 0,
          overflow: 'visible',
          position: 'static',
          width: 'auto',
          whiteSpace: 'inherit',
        },
      },
    },
    {
      variants,
    },
  )
}
