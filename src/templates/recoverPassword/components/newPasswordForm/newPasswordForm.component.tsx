import {useFormikContext} from 'formik'

import {Button} from '@/src/components/button'
import {Input} from '@/src/components/input'
import {Text} from '@/src/components/text'
import {NewPasswordFormProps} from './newPasswordForm'
import {TNewPasswordForm} from '../../recoverPassword'

export function NewPasswordForm({onNavigate}: NewPasswordFormProps) {
  const {handleSubmit, handleChange, handleBlur, values, errors, isSubmitting} =
    useFormikContext<TNewPasswordForm>()

  return (
    <>
      <Text
        title="Registrar nova senha"
        textsize="1.625rem"
        fontweight="500"
        marginbottom="1.2rem"
      />
      <Text
        title="Você solicitou a alteração da sua senha, basta apenas registrar a nova senha e logar novamente"
        marginbottom="4.5rem"
        textsize="1rem"
      />

      <form className="contentInputNewPassword" onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          name="newPassword1"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.newPassword1}
          inputError={errors?.newPassword1}
        />
        <Input
          label="Repetir nova senha"
          name="newPassword2"
          type="password"
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
            disabled={isSubmitting}
            onClick={() => onNavigate('EMAIL')}
          >
            Cancelar
          </Button>

          <Button
            bghover="#303F9F"
            bgcolor="#756B6B"
            textcolor="#fff"
            width="9.6rem"
            height="3rem"
            disabled={isSubmitting}
            type="submit"
            variant="contained"
          >
            {isSubmitting ? 'Carregando...' : 'Alterar'}
          </Button>
        </div>
      </form>
    </>
  )
}
