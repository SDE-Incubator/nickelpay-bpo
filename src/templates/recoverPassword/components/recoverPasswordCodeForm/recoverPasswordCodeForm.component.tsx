import {useRouter} from 'next/router'
import {useFormik} from 'formik'
import {useEffect, useState} from 'react'
import {AxiosError} from 'axios'
import {useMutation} from '@tanstack/react-query'
import * as Yup from 'yup'

import {Button} from '@/src/components/button'
import {Input} from '@/src/components/input'
import {Text} from '@/src/components/text'
import {Container, ContentButton} from './recoverPassword.styles'
import {RecoverPasswordCodeFormProps, TCodeForm} from './recoverPassword'
import {SWAlert} from '@/src/libs/toast'
import {
  getCodeToRecoverPassword,
  setCodeToRecoverPassword,
} from '@/src/services/authentication/recoverPassword'

export function RecoverPasswordCodeForm({
  onNext,
  onStorePasswordData,
  passwordData,
}: RecoverPasswordCodeFormProps) {
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(60)

  const {isLoading, mutate} = useMutation(
    async (code: string) => {
      return setCodeToRecoverPassword({code})
    },
    {
      onError: (error: unknown) => {
        const {response} = error as AxiosError<{message: string}>
        SWAlert.fire({
          icon: 'error',
          title: response?.data.message,
        })
      },
      onSuccess: (_, code) => {
        onNext('NEW_PASSWORD')
        onStorePasswordData({code})
      },
    }
  )

  const {isLoading: isLoadingResend, mutate: mutateResend} = useMutation(
    async () => {
      if (!passwordData.email) {
        throw new Error('Email inválido!')
      }
      const response = await getCodeToRecoverPassword({
        username: passwordData.email,
      })
      onStorePasswordData({token: response.token})
      return response
    },
    {
      onError: (error: unknown) => {
        const {response} = error as AxiosError<{message: string}>
        SWAlert.fire({
          icon: 'error',
          title: response?.data.message,
        })
      },
    }
  )

  const {handleBlur, values, errors, handleChange, handleSubmit} =
    useFormik<TCodeForm>({
      initialValues: {
        code: '',
      },
      validationSchema: Yup.object<TCodeForm>({
        code: Yup.string().required('Preencha o campo'),
      }),
      onSubmit: ({code}) => {
        if (totalTimeInSeconds === 0) {
          return setTotalTimeInSeconds(60)
        }

        mutate(code)
      },
    })

  const minute = Math.floor(totalTimeInSeconds / 60)
  const seconds = totalTimeInSeconds % 60

  const router = useRouter()

  function handleBack() {
    router.push('/entrar')
  }

  useEffect(() => {
    if (totalTimeInSeconds <= 0) {
      return
    }
    const timeOut = setTimeout(() => {
      setTotalTimeInSeconds(prevState => prevState - 1)
    }, 1000)

    return () => {
      clearTimeout(timeOut)
    }
  }, [totalTimeInSeconds])

  const handleResendCode = () => {
    mutateResend()
    setTotalTimeInSeconds(60)
  }

  return (
    <Container>
      <Text title="Redefinir senha" variant="h6" marginbottom="1.2rem" />
      <Text
        title="Digite o código que foi enviado para seu email"
        variant="body1"
        marginbottom="4.5rem"
      />

      <form onSubmit={handleSubmit}>
        <Input
          label="Código de mudança de senha"
          name="code"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.code}
          inputError={errors?.code}
        />
        {totalTimeInSeconds === 0 ? (
          <ContentButton>
            <Button
              disabled={isLoadingResend}
              bghover="#F5F5F5"
              textcolor="black"
              onClick={() => handleResendCode()}
              type="button">
              {isLoadingResend ? 'Carregando...' : 'Reenviar código'}
            </Button>
          </ContentButton>
        ) : (
          <div className="containerSeconds">
            <span>{minute.toString().padStart(2, '0')}</span>
            <span>:</span>
            <span>{seconds.toString().padStart(2, '0')}</span>
          </div>
        )}
        <div className="containerButton">
          <Button
            width="9.6rem"
            height="3rem"
            textcolor="#756B6B"
            bordercolor="#756B6B"
            variant="outlined"
            disabled={isLoading}
            onClick={handleBack}>
            Cancelar
          </Button>
          <Button
            bghover="#303F9F"
            bgcolor="#756B6B"
            textcolor="#fff"
            width="9.6rem"
            height="3rem"
            variant="contained"
            disabled={isLoading}
            type="submit">
            {isLoading ? 'Carregando...' : 'Confirmar'}
          </Button>
        </div>
      </form>
    </Container>
  )
}
