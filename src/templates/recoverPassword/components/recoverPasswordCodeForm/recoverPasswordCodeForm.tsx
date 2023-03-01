import {useFormik} from 'formik'
import * as Yup from 'yup'
import {useRouter} from 'next/router'
import {Button} from '@/src/components/button'
import {Input} from '@/src/components/input'
import {Text} from '@/src/components/text'
import {useEffect, useState} from 'react'
import {Container, ContentButton} from './recoverPassword.styles'
import {RecoverPasswordCodeFormProps, CodeForm} from './recoverPassword'
import {useMutation} from '@tanstack/react-query'
import {setCodeToRecoverPassword} from '@/src/services/authentication/recoverPassword/recoverPassword.service'
import {SWAlert} from '@/src/libs/toast'
import {AxiosError} from 'axios'

export function RecoverPasswordCodeForm({
  onNext,
}: RecoverPasswordCodeFormProps) {
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(60)

  const {isLoading, mutate} = useMutation(
    async (code: string) => {
      console.log('aqui', code)
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
      onSuccess: () => onNext('CODE'),
    }
  )

  const {handleBlur, values, errors, handleChange, handleSubmit} =
    useFormik<CodeForm>({
      initialValues: {
        code: '',
      },
      validationSchema: Yup.object<CodeForm>({
        code: Yup.string().required('Preencha o campo'),
      }),
      onSubmit: ({code}) => {
        if (totalTimeInSeconds === 0) {
          console.log('inside')
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

  return (
    <Container>

      <Text title='Redefinir senha' 
        variant='h6' 
        marginbottom="1.2rem"
      
      />
      <Text title='Digite o código que foi enviado para seu email' 
        variant='body1'
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
            <Button bghover="#F5F5F5" textcolor="black" type="submit">
              reenviar código
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
