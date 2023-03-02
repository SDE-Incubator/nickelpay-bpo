import {Button} from '@/src/components/button'
import {Input} from '../../components/input'
import {CircularProgress} from '@mui/material'
import {SideLogo} from '../../components/sideLogo'
import {Container, Form, StyleLink, ImageContainer} from './login.styles'
import {useFormik} from 'formik'
import {loginFormValidation} from './login.schemas'
import {TloginForm} from './login'
import {login} from '@/src/services/authentication/login/login.service'
import {AxiosError} from 'axios'
import {SWAlert} from '@/src/libs/toast'
import {useMutation} from '@tanstack/react-query'

export function LoginTemplate() {
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

  const {handleSubmit, touched, errors, handleChange, handleBlur, values} =
    useFormik<TloginForm>({
      initialValues: {
        username: '',
        password: '',
      },
      validationSchema: loginFormValidation,
      onSubmit: async values => {
        mutate(values)
      },
    })

  return (
    <Container>
      <SideLogo />
      <Form onSubmit={handleSubmit}>
        <ImageContainer
          src="https://source.unsplash.com/800x600/?face"
          alt="foto do usuario"
        />
        <Input
          label="Login"
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
        />
        {touched.username && errors.username ? (
          <div className="errorRequired">{errors.username}</div>
        ) : null}
        <Input
          label="Senha"
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {touched.password && errors.password ? (
          <div className="errorRequired">{errors.password}</div>
        ) : null}
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
    </Container>
  )
}
