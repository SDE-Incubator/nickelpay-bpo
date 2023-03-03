import * as Yup from 'yup'
import { TCodeForm } from './codeForm'

export const codeFormValidation = Yup.object<TCodeForm>({
  codeValidation: Yup.string()
  .required('Preencha o campo')

})
