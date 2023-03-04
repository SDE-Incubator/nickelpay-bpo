import {useRouter} from 'next/router'
import {useFormikContext} from 'formik'

import {Input} from '@/src/components/input'
import {Button} from '@/src/components/button'
import {Text} from '@/src/components/text'

import {Container, Form} from './recoverPasswordEmailForm.styles'
import {TNewPasswordForm} from '../../recoverPassword'

export function RecoverPasswordEmailForm() {
  const {handleSubmit, handleBlur, handleChange, values, errors, isSubmitting} =
    useFormikContext<TNewPasswordForm>()

  const router = useRouter()

  function handleCancel() {
    router.push('/entrar')
  }

  console.log('errors', errors)

  return (
    <Container>
      <Text title="Redefinir senha" variant="h6" marginbottom="1.2rem" />
      <Text
        title="Digite seu email de cadastro e lhe enviaremos as informações por email"
        variant="body1"
        marginbottom="4.5rem"
      />

      <Form onSubmit={handleSubmit}>
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
            disabled={isSubmitting}
            onClick={handleCancel}
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
            {isSubmitting ? 'Carregando...' : 'Enviar'}
          </Button>
        </div>
      </Form>
    </Container>
  )
}
