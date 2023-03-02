import {useCallback, useMemo, useState} from 'react'
import {SideLogo} from '../../components/sideLogo'
import {RecoverPasswordEmailForm} from './components/recoverPasswordEmailForm'
import {RecoverPasswordCodeForm} from './components/recoverPasswordCodeForm'
import {Container, Content} from './recoverPassword.styles'
import {
  TNewPasswordData,
  RecoverPasswordScreens,
  RecoverPasswordScreensRender,
} from './recoverPassword'
import {NewPasswordForm} from './components/newPasswordForm'

export function RecoverPasswordTemplate() {
  const [screen, setScreen] = useState<RecoverPasswordScreens>('EMAIL')
  const [newPasswordData, setNewPasswordData] = useState<TNewPasswordData>({
    code: '',
    token: '',
    email: '',
  })

  const handleStorePasswordData = useCallback((newData: TNewPasswordData) => {
    setNewPasswordData(prevState => ({...prevState, ...newData}))
  }, [])

  const handleNextScreen = useCallback((nextScreen: RecoverPasswordScreens) => {
    setScreen(nextScreen)
  }, [])

  const currentScreen: JSX.Element = useMemo(() => {
    const screens: RecoverPasswordScreensRender = {
      EMAIL: (
        <RecoverPasswordEmailForm
          onStorePasswordData={handleStorePasswordData}
          onNext={handleNextScreen}
        />
      ),
      CODE: (
        <RecoverPasswordCodeForm
          passwordData={newPasswordData}
          onStorePasswordData={handleStorePasswordData}
          onNext={handleNextScreen}
        />
      ),
      NEW_PASSWORD: <NewPasswordForm passwordData={newPasswordData} />,
    }

    return screens[screen]
  }, [screen, handleNextScreen, handleStorePasswordData, newPasswordData])

  return (
    <Container>
      <SideLogo />
      <Content>{currentScreen}</Content>
    </Container>
  )
}
