import {StyleLink, Form} from './loginForm.styles'
import {Button} from '@/src/components/button'
import {Input} from '../../../../components/input'
import {CircularProgress} from '@mui/material'
import {useFormik} from 'formik'
import {loginFormValidation} from './login.schemas'
import {TloginForm} from './login'
import {login} from '@/src/services/authentication/login/login.service'
import {AxiosError} from 'axios'
import {SWAlert} from '@/src/libs/toast'
import {useMutation} from '@tanstack/react-query'

type loginFormProps = {
  onSubmit(): void
}


export function LoginForm({onSubmit}: loginFormProps) {
  const {isLoading, mutate} = useMutation(
    async ({username, password}: TloginForm) => {
      return login({username, password})
    },
    {
      mutationKey: ['login'],
      onError: (error: unknown) => {
        const {response} = error as AxiosError<{message: string}>
        SWAlert.fire({
          icon: 'error',
          title: response?.data.message,
        })
      },
      onSuccess: () => {
        SWAlert.fire({
          icon: 'success',
        })
      },
    }
  )

  const {handleSubmit, errors, handleChange, handleBlur, values} =
    useFormik<TloginForm>({
      initialValues: {
        username: '',
        password: '',
      },
      validationSchema: loginFormValidation,
      onSubmit: async values => {
        mutate(values)

        onSubmit()
      },
    })


  return (
    <>
       <Form onSubmit={handleSubmit}>
        <Input
          label="Login"
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          inputError={errors?.username}
        />

        <Input
          label="Senha"
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          inputError={errors?.password}
        />

        <StyleLink href="/recuperar-senha">Esqueci minha senha</StyleLink>
        
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Button
            bghover="#303F9F"
            bgcolor="#756B6B"
            textcolor="#fff"
            width="8.8rem"
            type="submit"
            variant="contained">
            Entrar
          </Button>
        )}
      </Form>
    
    </>
  )
}
