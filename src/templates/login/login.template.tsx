import { useState } from 'react'
import {SideLogo} from '../../components/sideLogo'
import {Container, ImageContainer, Content } from './login.styles'
import { LoginForm } from './components/loginForm'
import { CodeForm } from './components/codeForm'

export function LoginTemplate() {
  const [isValidAccount, setIsValidAccount] = useState(false)

  function handleSubmit() {
    setIsValidAccount(true)
  }

  function handleBack() {
    setIsValidAccount(false)
  }


  return (
    <Container>
      <SideLogo />

      <Content>
        <ImageContainer
          src="https://source.unsplash.com/800x600/?face"
          alt="foto do usuario"
        />
        {isValidAccount ? <CodeForm onClickBack={handleBack} /> : <LoginForm onSubmit={handleSubmit}/>} 
      </Content>




      </Container>
  )
}
