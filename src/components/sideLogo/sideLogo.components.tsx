import { Container, Title } from "./sideLogo.styles";
import Image from "next/image";
import logoImg from '../../../public/marca.svg'

export function SideLogo () {
    return (
        <Container>
            <Image src={logoImg} width={185} height={160} alt="logo nickelpay"/>
            <Title> Backoffice </Title>
        </Container>
    )
}