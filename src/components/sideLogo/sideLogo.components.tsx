import {Container, Title} from './sideLogo.styles'
import Image from 'next/image'

export function SideLogo() {
  return (
    <Container>
      <Image src="/logo.svg" width={185} height={160} alt="logo nickelpay" />
      <Title> Backoffice </Title>
    </Container>
  )
}
