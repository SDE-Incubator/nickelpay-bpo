export type RecoverPasswordScreens = 'EMAIL' | 'CODE' | 'NEW_PASSWORD'

export type RecoverPasswordScreensRender = Record<
  RecoverPasswordScreens,
  JSX.Element
>

export type TNewPasswordForm = {
  username: string
  code: string
  newPassword1: string
  newPassword2: string
}

export type TNewPasswordData = {
  code?: string
  email?: string
  token?: string
}

export type TRecoverPasswordProps = TNewPasswordForm &
  FormikHelpers<TNewPasswordForm>
