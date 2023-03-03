import Image from 'next/image'
import {useFormikContext} from 'formik'

import * as Styles from './codeForm.styles'
import {Button} from '@/src/components/button'
import {Input} from '../../../../components/input'
import {codeFormProps} from './codeForm'
import {Text} from '@/src/components/text'
import {TLoginForm} from '../../login'

export function CodeForm({isSubmitting, onClickBack}: codeFormProps) {
  const {handleSubmit, handleBlur, handleChange, values, errors} =
    useFormikContext<TLoginForm>()

  return (
    <>
      <Styles.Form onSubmit={handleSubmit}>
        <Styles.GoBackButton onClick={onClickBack}>
          <Image src="/arrow-left.svg" alt="voltar" width={20} height={20} />
        </Styles.GoBackButton>
        <Text
          title={`Foi enviado um email com o código de confirmação para o endereço ${values.username}. Por favor insira o código abaixo`}
          variant="body1"
          marginbottom="2.5rem"
          margintop="2.5rem"
        />
        <Input
          label="Código de verificação"
          name="code"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.code}
          inputError={errors?.code}
        />
        <Button
          bghover="#303F9F"
          bgcolor="#756B6B"
          width="8.8rem"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          margintop="2.5rem"
        >
          Entrar
        </Button>
      </Styles.Form>
    </>
  )
}
