import {useCallback, useMemo, useState} from 'react'
import {SideLogo} from '../../components/sideLogo'
import {RecoverPasswordForm} from './components/recoverPasswordForm'
import {RecoverPasswordCodeForm} from './components/recoverPasswordCodeForm'
import {Container, Content} from './recoverPassword.styles'
import {
  RecoverPasswordScreens,
  RecoverPasswordScreensRender,
} from './recoverPassword'
import { NewPassword } from './components/newPassword'

export function RecoverPasswordTemplate() {
  const [screen, setScreen] = useState<RecoverPasswordScreens>('EMAIL')

  const handleNextScreen = useCallback((nextScreen: RecoverPasswordScreens) => {
    setScreen(nextScreen)
  }, [])

  const currentScreen: JSX.Element = useMemo(() => {
    const screens: RecoverPasswordScreensRender = {
      EMAIL: <RecoverPasswordForm onNext={handleNextScreen} />,
      CODE: <RecoverPasswordCodeForm onNext={handleNextScreen} />,
      NEW_PASSWORD: <NewPassword />,
    }

    return screens[screen]
  }, [screen, handleNextScreen])

  return (
    <Container>
      <SideLogo />

      <Content>
        {currentScreen}
      </Content>
      
    </Container>
  )
}
