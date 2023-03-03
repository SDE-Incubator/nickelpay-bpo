import {Button} from '@/src/components/button'
import {Input} from '../../../../components/input'
import {CircularProgress} from '@mui/material'
import {useFormikContext} from 'formik'
import {LoginFormProps} from './loginForm'
import {TLoginForm} from '../../login'
import * as Styles from './loginForm.styles'

export function LoginForm({isSubmitting}: LoginFormProps) {
  const {handleBlur, handleChange, handleSubmit, errors, values} =
    useFormikContext<TLoginForm>()

  return (
    <Styles.Form onSubmit={handleSubmit}>
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
      <Styles.StyleLink href="/recuperar-senha">
        Esqueci minha senha
      </Styles.StyleLink>
      {isSubmitting ? (
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
    </Styles.Form>
  )
}
