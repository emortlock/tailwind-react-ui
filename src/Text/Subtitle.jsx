import { compose, setDisplayName, withProps } from 'recompose'
import Title from './Title'

export default compose(
  setDisplayName('Subtitle'),
  withProps({ subtitle: true }),
)(Title)
