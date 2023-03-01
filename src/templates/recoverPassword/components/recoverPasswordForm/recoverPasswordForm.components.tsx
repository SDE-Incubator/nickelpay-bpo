import {useRouter} from 'next/router'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {Input} from '@/src/components/input'
import {Button} from '@/src/components/button'
import {Text} from '@/src/components/text'
import { Container} from './recoverPassword.styles'
import {RecoverPasswordFormProps, EmailForm} from './recoverPasswordForm'
import {AxiosError} from 'axios'
import {SWAlert} from '@/src/libs/toast'
import {useMutation} from '@tanstack/react-query'
import {getCodeToRecoverPassword} from '@/src/services/authentication/recoverPassword'

export function RecoverPasswordForm({onNext}: RecoverPasswordFormProps) {
  const router = useRouter()

  const {isLoading, mutate} = useMutation(
    async ({username}: EmailForm) => {
      return getCodeToRecoverPassword({username})
    },
    {
      mutationKey: ['username'],
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
    useFormik<EmailForm>({
      initialValues: {
        username: '',
      },
      validationSchema: Yup.object<EmailForm>({
        username: Yup.string()
          .email('Email inválido')
          .required('Email não pode ser vazio'),
      }),
      onSubmit: async ({username}) => {
        mutate({username})
      },
    })

  function handleCancel() {
    router.push('/entrar')
  }

  return (
    <Container>
      <Text title='Redefinir senha' 
        variant='h6' 
        marginbottom="1.2rem"
      
      />
      <Text title='Digite seu email de cadastro e lhe enviaremos as informações por email' 
        variant='body1'
        marginbottom="4.5rem"
      />

      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          inputError={errors?.username}
        />

        <div className="containerButton">
          <Button
            width="9.6rem"
            height="3rem"
            textcolor="#756B6B"
            bordercolor="#756B6B"
            variant="outlined"
            onClick={handleCancel}>
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
            {isLoading ? 'Carregando...' : 'Enviar'}
          </Button>
        </div>
      </form>
    </Container>
  )
}
