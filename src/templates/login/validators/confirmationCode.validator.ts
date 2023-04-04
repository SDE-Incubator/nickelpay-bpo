import * as Yup from 'yup'

export const codeFormValidation = Yup.object({
  code: Yup.string().required('Preencha o campo'),
})
