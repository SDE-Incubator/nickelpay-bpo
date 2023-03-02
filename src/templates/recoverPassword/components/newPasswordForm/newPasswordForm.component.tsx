import {useRouter} from 'next/router'
import {useMutation} from '@tanstack/react-query'
import {useFormik} from 'formik'
import {AxiosError} from 'axios'

import {Button} from '@/src/components/button'
import {Input} from '@/src/components/input'
import {Text} from '@/src/components/text'
import {NewPasswordFormProps, TNewPasswordForm} from './newPasswordForm'
import {setNewPassword} from '@/src/services/authentication/recoverPassword'
import {SWAlert} from '@/src/libs/toast'
import {newPasswordSchema} from './newPasswordForm.schema'

export function NewPasswordForm({passwordData}: NewPasswordFormProps) {
  const router = useRouter()

  const {isLoading, mutate} = useMutation(
    async ({newPassword1, newPassword2}: TNewPasswordForm) => {
      const {code, token} = passwordData
      if (!code || !token) throw new Error('There is information missing!')
      return setNewPassword({
        newPassword1,
        newPassword2,
        code,
        token,
      })
    },
    {
      mutationKey: ['newPassword'],
      onSuccess: () => {
        SWAlert.fire({
          icon: 'success',
          title: 'Senha redefinida com sucesso!',
        })
        router.push('/entrar')
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

  const {handleSubmit, handleBlur, handleChange, values, errors} =
    useFormik<TNewPasswordForm>({
      initialValues: {newPassword1: '', newPassword2: ''},
      validationSchema: newPasswordSchema,
      onSubmit: values => {
        mutate(values)
      },
    })

  function handleCancel() {
    router.push('/entrar')
  }

  return (
    <>
      <Text title="Registrar nova senha" variant="h6" marginbottom="1.2rem" />
      <Text
        title="Digite o código que foi enviado para seu email"
        variant="body1"
        marginbottom="4.5rem"
      />
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          name="newPassword1"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.newPassword1}
          inputError={errors?.newPassword1}
        />
        <Input
          label="Repetir nova senha"
          name="newPassword2"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.newPassword2}
          inputError={errors?.newPassword2}
        />

        <div className="containerButton">
          <Button
            width="9.6rem"
            height="3rem"
            textcolor="#756B6B"
            bordercolor="#756B6B"
            variant="outlined"
            disabled={isLoading}
            onClick={handleCancel}>
            Cancelar
          </Button>

          <Button
            bghover="#303F9F"
            bgcolor="#756B6B"
            textcolor="#fff"
            width="9.6rem"
            height="3rem"
            disabled={isLoading}
            type="submit"
            variant="contained">
            {isLoading ? 'Carregando...' : 'Alterar'}
          </Button>
        </div>
      </form>
    </>
  )
}
