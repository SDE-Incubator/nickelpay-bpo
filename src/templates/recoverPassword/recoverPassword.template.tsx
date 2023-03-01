import {useState} from 'react'
import  { SideLogo }  from '../../components/sideLogo'
import { RecoverPasswordForm } from './components/recoverPasswordForm';
import { RecoverPasswordCodeForm } from './components/recoverPasswordCodeForm';
import { Container, Text, Content} from "./recoverPassword.styles";

export function RecoverPasswordTemplate() {
  const [isValidEmail, setIsValidEmail] = useState(false)

  function handleSubmit() {
    setIsValidEmail(true)
  }

  return (
    <Container>
      
      <SideLogo />

      <Content>

        <Text variant='h6'> Redefinir senha </Text>

        {isValidEmail ? <RecoverPasswordCodeForm /> : <RecoverPasswordForm onSubmit={handleSubmit}/>}      

      </Content>


    </Container>
  );
}
