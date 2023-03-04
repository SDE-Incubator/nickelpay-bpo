import * as Yup from 'yup'

export const usernameValidator = Yup.object().shape({
  username: Yup.string()
    .email('Email inválido')
    .required('Email não pode ser vazio'),
})

export const codeValidator = Yup.object().shape({
  code: Yup.string().required('Preencha o campo'),
})

export const comparePasswordsValidator = Yup.object().shape({
  newPassword1: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Sua senha deve conter no mínimo 8 caracteres alpha numéricos contendo letras maiúscula, minúscula e caracteres especiais.'
    )
    .required('Um ou mais campos não foram preenchidos.'),
  newPassword2: Yup.mixed()
    .oneOf(
      [Yup.ref('newPassword1')],
      'As senhas não correspondem, verifique novamente.'
    )
    .required('Um ou mais campos não foram preenchidos'),
})
