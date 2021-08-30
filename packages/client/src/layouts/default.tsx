import { FC, PropsWithChildren, ReactNode } from 'react'
import Container from '../components/Container'

const DefaultLayout: FC = ({ children }: PropsWithChildren<ReactNode>) => (
  <Container fluid>{children}</Container>
)

export default DefaultLayout
