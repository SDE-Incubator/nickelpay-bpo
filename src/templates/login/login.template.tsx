import {useMemo, useState} from 'react'
import {SideLogo} from '../../components/sideLogo'
import {Container, ImageContainer, Content} from './login.styles'
import {LoginForm} from './components/loginForm'
import {CodeForm} from './components/codeForm'
import {Formik} from 'formik'
import {TLoginForm, TLoginScreenRender, TLoginScreens} from './login'
import {useMutation} from '@tanstack/react-query'
import {login, loginConfirmationCode} from '@/src/services/authentication/login'
import {AxiosError} from 'axios'
import {SWAlert} from '@/src/libs/toast'
import {useRouter} from 'next/router'

export function LoginTemplate() {
  const [screen, setScreen] = useState<TLoginScreens>('LOGIN')

  const {replace} = useRouter()

  const {isLoading, mutate} = useMutation(
    async ({code, password, username}: TLoginForm) => {
      if (screen === 'LOGIN') {
        return login({password, username})
      }
      return loginConfirmationCode({code})
    },
    {
      mutationKey: [screen],
      onSuccess: () => {
        if (screen === 'LOGIN') {
          return setScreen('CODE_CONFIRMATION')
        }
        return replace('/dashboard')
      },
      onError: (error: unknown) => {
        const {response} = error as AxiosError<{message: string}>
        SWAlert.fire({
          icon: 'error',
          title: response?.data.message,
        })
      },
    }
  )

  const currentScreen: JSX.Element = useMemo(() => {
    const screens: TLoginScreenRender = {
      CODE_CONFIRMATION: (
        <CodeForm
          isSubmitting={isLoading}
          onClickBack={() => setScreen('LOGIN')}
        />
      ),
      LOGIN: <LoginForm isSubmitting={isLoading} />,
    }

    return screens[screen]
  }, [screen, isLoading])

  const handleLogin = async (values: TLoginForm) => {
    mutate(values)
  }

  return (
    <Container>
      <SideLogo />
      <Content>
        <ImageContainer
          src="https://source.unsplash.com/800x600/?face"
          alt="foto do usuario"
        />
        <Formik<TLoginForm>
          initialValues={{
            username: '',
            password: '',
            code: '',
          }}
          onSubmit={handleLogin}
        >
          {currentScreen}
        </Formik>
      </Content>
    </Container>
  )
}
