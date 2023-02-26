import { CircularProgress } from '@mui/material';
import {useState} from 'react'
import  SideLogo  from '../../components/sideLogo/sideLogo.components'
import { Container, Form, Input, StyleLink, ButtonStyle, ImageContainer } from "./login.styles";

export function LoginTemplate() {
  const [isLoading] = useState(false)

  return (
    <Container>
      <SideLogo />

      <Form>
        <ImageContainer src="https://source.unsplash.com/800x600/?face" alt="foto do usuario"/>
        <Input label="Login"/>
        <Input label="Senha"/>

        <StyleLink href="/">Esqueci minha senha</StyleLink>

        {isLoading ? < CircularProgress /> : <ButtonStyle variant="contained">Entrar</ButtonStyle>}

      </Form>

    </Container>
  );
}
