import classNames from 'classnames'
import { FC } from 'react'
import s from './style.module.scss'
import { ContainerProps } from './types'

const Container: FC<ContainerProps> = ({
  fluid = false,
  box = false,
  center = false,
  className,
  children,
}) => {
  return (
    <div
      className={classNames(
        s.container,
        {
          [s.containerFluid]: fluid,
          [s.containerBox]: box,
          [s.containerCentered]: center,
        },
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container
