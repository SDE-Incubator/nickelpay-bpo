import { Button } from '@/src/components/button'
import { Input } from '../../components/input'
import { CircularProgress } from '@mui/material'
import { useState } from 'react'
import { SideLogo } from '../../components/sideLogo'
import { Container, Form, StyleLink, ImageContainer } from './login.styles'
import { useFormik } from 'formik'
import { loginFormValidation } from './login.schemas'
import { TloginForm } from './login'
import { login } from '@/src/services/authentication/login/login.service'
import { AxiosError } from 'axios'
import { SWAlert } from '@/src/libs/toast'

export function LoginTemplate() {
  const [isLoading] = useState(false)

  const { handleSubmit, touched, errors, handleChange, handleBlur, values } =
    useFormik<TloginForm>({
      initialValues: {
        username: '',
        password: '',
      },
      validationSchema: loginFormValidation,
      onSubmit: async ({ username, password }) => {
        try {
          const response = await login({ username, password })
          console.log('response', response)
        } catch (error: unknown) {
          const { response } = error as AxiosError<{ message: string }>
          SWAlert.fire({
            icon: 'error',
            title: response?.data.message,
          })
        }
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
            variant="contained"
          >
            Entrar
          </Button>
        )}
      </Form>
    </Container>
  )
}
