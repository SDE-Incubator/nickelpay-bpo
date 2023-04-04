import * as Yup from 'yup'

export const loginFormValidation = Yup.object({
  username: Yup.string()
    .email('Email inválido')
    .required('Email não pode ser vazio'),
  password: Yup.string()
    .required('Senha não pode ser vazia')
    .min(6, 'Minimo 6 caracteres'),
})
