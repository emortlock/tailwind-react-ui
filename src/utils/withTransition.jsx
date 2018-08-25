import React from 'react'
import { Transition } from 'react-transition-group'
import get from 'lodash.get'

const withTheme = (Component, { inState, ...rest }) => {
  const WithTransition = componentProps => (
    <Transition in={get(componentProps, inState)} timeout={0} {...rest}>
      {state => <Component {...componentProps} transition={state} />}
    </Transition>
  )

  WithTransition.displayName = `WithTransition(${Component.displayName})`

  return WithTransition
}

export default withTheme
