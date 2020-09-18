import type {
  TransitionProps,
  TransitionStatus as RtgTransitionStatus,
} from 'react-transition-group/Transition'

import React from 'react'
import { Transition } from 'react-transition-group'
import get from 'lodash.get'

export type TransitionStatus = RtgTransitionStatus

export interface WithTransition {
  transition?: TransitionStatus
}

export const withTransition = <P extends React.PropsWithChildren<{}>>(
  Component: React.FC<P>,
  { inState, ...rest }: { inState: string } & Partial<TransitionProps>,
) => {
  const WithTransition: React.FC<P> = (componentProps) => (
    <Transition in={get(componentProps, inState)} timeout={0} {...rest}>
      {(state) => <Component {...componentProps} transition={state} />}
    </Transition>
  )

  WithTransition.displayName = `WithTransition(${Component.displayName})`

  return WithTransition
}
