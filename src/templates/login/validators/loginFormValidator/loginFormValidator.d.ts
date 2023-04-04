import {loginFormValidation} from './loginForm.validator'

type LoginForm = Yup.InferType<typeof loginFormValidation>

export type LoginFormValidator = LoginForm & {
  code: string
}
