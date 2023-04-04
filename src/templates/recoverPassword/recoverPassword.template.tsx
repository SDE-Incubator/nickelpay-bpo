import {useRouter} from 'next/router'
import {AxiosError} from 'axios'
import {useCallback, useMemo, useState} from 'react'
import {useMutation} from '@tanstack/react-query'
import {SWAlert} from '@/src/libs/toast'
import {Formik, FormikHelpers} from 'formik'

import {SideLogo} from '../../components/sideLogo'
import {RecoverPasswordEmailForm} from './components/recoverPasswordEmailForm'
import {RecoverPasswordCodeForm} from './components/recoverPasswordCodeForm'
import {
  RecoverPasswordScreens,
  RecoverPasswordScreensRender,
  TNewPasswordForm,
  TRecoverPasswordProps,
} from './recoverPassword'
import {NewPasswordForm} from './components/newPasswordForm'
import {
  getCodeToRecoverPassword,
  setCodeToRecoverPassword,
  setNewPassword,
} from '@/src/services/authentication/recoverPassword'
import * as Styles from './recoverPassword.styles'
import {
  codeValidator,
  comparePasswordsValidator,
  usernameValidator,
} from './validators/recoverPassword.validator'

export function RecoverPasswordTemplate() {
  const [screen, setScreen] = useState<RecoverPasswordScreens>('EMAIL')

  const router = useRouter()

  const {mutate} = useMutation(
    async ({
      username,
      code,
      newPassword1,
      newPassword2,
      setSubmitting,
    }: TRecoverPasswordProps) => {
      let response = null
      switch (screen) {
        case 'EMAIL':
          response = await getCodeToRecoverPassword({username})
          break
        case 'CODE':
          response = setCodeToRecoverPassword({code})
          break
        case 'NEW_PASSWORD':
          console.log({newPassword1, newPassword2})
          response = setNewPassword({
            newPassword1,
            newPassword2,
            code,
            token: String(localStorage.getItem('@nickelpay/token')),
          })
          break
        default:
          throw new Error('Invalid form')
      }
      setSubmitting(false)
      return response
    },
    {
      mutationKey: ['recoverPassword'],
      onSuccess: async () => {
        switch (screen) {
          case 'EMAIL':
            return handleNextScreen('CODE')
          case 'CODE':
            return handleNextScreen('NEW_PASSWORD')
          case 'NEW_PASSWORD':
            await SWAlert.fire({
              icon: 'success',
              title: 'Senha redefinida com sucesso!',
              confirmButtonText: 'Ir para o login',
            })
            router.push('/entrar')
          default:
            return handleNextScreen('CODE')
        }
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

  const handleNextScreen = useCallback((nextScreen: RecoverPasswordScreens) => {
    setScreen(nextScreen)
  }, [])

  const currentScreen: JSX.Element = useMemo(() => {
    const screens: RecoverPasswordScreensRender = {
      EMAIL: <RecoverPasswordEmailForm />,
      CODE: <RecoverPasswordCodeForm />,
      NEW_PASSWORD: <NewPasswordForm onNavigate={handleNextScreen} />,
    }

    return screens[screen]
  }, [screen, handleNextScreen])

  const handleRecoverPassword = (
    values: TNewPasswordForm,
    formikHelpers: FormikHelpers<TNewPasswordForm>
  ) => {
    mutate({...values, ...formikHelpers})
  }

  return (
    <Styles.Container>
      <SideLogo />
      <Formik<TNewPasswordForm>
        initialValues={{
          code: '',
          username: '',
          newPassword1: '',
          newPassword2: '',
        }}
        onSubmit={handleRecoverPassword}
        validationSchema={
          screen === 'EMAIL'
            ? usernameValidator
            : screen === 'CODE'
            ? codeValidator
            : comparePasswordsValidator
        }
      >
        <Styles.Content>{currentScreen}</Styles.Content>
      </Formik>
    </Styles.Container>
  )
}
