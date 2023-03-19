import {useRouter} from 'next/router'
import {useFormikContext} from 'formik'
import {useEffect, useState} from 'react'
import {setCookie} from 'cookies-next'
import {AxiosError} from 'axios'
import {useMutation} from '@tanstack/react-query'

import {Button} from '@/src/components/button'
import {Input} from '@/src/components/input'
import {Text} from '@/src/components/text'
import {Container, ContentButton, Form} from './recoverPassword.styles'
import {SWAlert} from '@/src/libs/toast'
import {getCodeToRecoverPassword} from '@/src/services/authentication/recoverPassword'
import {TNewPasswordForm} from '../../recoverPassword'

export function RecoverPasswordCodeForm() {
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(60)

  const {handleSubmit, handleBlur, handleChange, values, errors, isSubmitting} =
    useFormikContext<TNewPasswordForm>()

  const {isLoading: isLoadingResend, mutate: mutateResend} = useMutation(
    async () => {
      if (!values.username) {
        throw new Error('Email inválido!')
      }
      const response = await getCodeToRecoverPassword({
        username: values.username,
      })
      setCookie('@nickelpay/token', response.token)
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
      <Text
        title="Redefinir senha"
        textsize="1.625rem"
        fontweight="500"
        marginbottom="1.2rem"
      />
      <Text
        title="Digite o código que foi enviado para seu email"
        marginbottom="4.5rem"
        textsize="1rem"
      />

      <Form onSubmit={handleSubmit}>
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
              type="button"
            >
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
            disabled={isSubmitting}
            onClick={handleBack}
          >
            Cancelar
          </Button>
          <Button
            bghover="#303F9F"
            bgcolor="#756B6B"
            textcolor="#fff"
            width="9.6rem"
            height="3rem"
            variant="contained"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? 'Carregando' : 'Confirmar'}
          </Button>
        </div>
      </Form>
    </Container>
  )
}
