import { ComponentProps } from 'react'

export type ContainerProps = ComponentProps<'div'> &
  Partial<{
    fluid: boolean
    box: boolean
    center: boolean
  }>
